const Student = require('../models/Student');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 1. Student Register
exports.studentRegister = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, securityQuestion, answer, gender } = req.body;
        
        // Check if user already exists in Student or Admin
        const existingStudent = await Student.findOne({ email });
        const existingAdmin = await Admin.findOne({ email });
        
        if (existingStudent || existingAdmin) {
            return res.status(400).json({ message: "Email already registered!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newStudent = new Student({ 
            firstName, 
            lastName, 
            email, 
            phone, 
            password: hashedPassword, 
            securityQuestion, 
            answer, 
            gender,
            role: 'student' // Role explicit-ah set pandrom
        });

        await newStudent.save();
        res.status(201).json({ success: true, message: "Student registered successfully!" });
    } catch (err) { 
        res.status(500).json({ error: err.message }); 
    }
};

// 2. Admin Register (With Secret Key & Automatic ID Generation)
exports.adminRegister = async (req, res) => {
    try {
        const { fullName, email, department, password, securityQuestion, securityAnswer, secretKey } = req.body;

        // 🛑 SECURITY 1: Admin Secret Key Check
        // Intha key illama student-ala admin-ah register panna mudiyaadhu
        if (secretKey !== process.env.ADMIN_SECRET_KEY) {
            return res.status(403).json({ 
                success: false, 
                message: "Unauthorized! Invalid Admin Secret Key." 
            });
        }

        // 🛑 SECURITY 2: Check if Email belongs to a Student
        const isStudent = await Student.findOne({ email });
        if (isStudent) {
            return res.status(403).json({ message: "Access Denied: Intha email student account-la irukku!" });
        }

        // 🛑 SECURITY 3: Check if Admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already registered with this email!" });
        }

        // Generate Special Admin ID
        const generatedAdminId = `ADM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({ 
            fullName, 
            email, 
            adminId: generatedAdminId, // Automatic-ah generate aagum
            department, 
            password: hashedPassword, 
            securityQuestion, 
            securityAnswer,
            role: 'admin'
        });

        await newAdmin.save();
        res.status(201).json({ 
            success: true, 
            message: "Admin Profile Created!", 
            adminId: generatedAdminId 
        });
    } catch (err) { 
        res.status(500).json({ error: err.message }); 
    }
};

// 3. Common Login
exports.login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        
        // Role-ah base panni search pandrom
        const user = (role === 'admin') ? await Admin.findOne({ email }) : await Student.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not found!" });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

        // Token generation using environment variable for secret
        const token = jwt.sign(
            { id: user._id, role: user.role }, 
            process.env.JWT_SECRET || "skillup_secret_2026", 
            { expiresIn: '1d' }
        );

        res.status(200).json({ 
            success: true, 
            token, 
            role: user.role, 
            name: user.firstName || user.fullName,
            adminId: user.adminId || null
        });
    } catch (err) { 
        res.status(500).json({ error: err.message }); 
    }
};

// 4. Admin Dashboard Data
exports.getAdminDashboard = async (req, res) => {
    try {
        const totalStudents = await Student.countDocuments();
        // Password-ah thavira matha details mattum edukkurom
        const students = await Student.find({}, "-password").sort({ createdAt: -1 });
        
        res.status(200).json({ 
            success: true, 
            stats: { totalStudents }, 
            students 
        });
    } catch (err) { 
        res.status(500).json({ error: "Dashboard data fetch failed" }); 
    }
};