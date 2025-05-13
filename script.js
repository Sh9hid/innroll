let studentForm, recordsTable;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements after DOM loads
    studentForm = document.getElementById('studentForm');
    recordsTable = document.getElementById('recordsTable').querySelector('tbody');
    
    // Initialize storage and load records
    initializeStorage();
    loadRecords();
    
    // Form submit handler
    studentForm.addEventListener('submit', submitHandler);
    
    // Smooth scroll setup
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function initializeStorage() {
    if (!localStorage.getItem('students')) {
        const sampleData = [
            { name: "Shahid", studentId: "1001", email: "askmitw@example.com", contact: "1234567890" },
            // { name: "Ja", studentId: "1002", email: "jane@example.com", contact: "0987654321" }
        ];
        localStorage.setItem('students', JSON.stringify(sampleData));
    }
}

function loadRecords() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    recordsTable.innerHTML = ''; // Clear existing rows
    
    students.forEach((student, index) => {
        const row = recordsTable.insertRow();
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.studentId}</td>
            <td>${student.email}</td>
            <td>${student.contact}</td>
            <td>
                <button class="edit" onclick="editRecord(${index})">Edit</button>
                <button class="delete" onclick="deleteRecord(${index})">Delete</button>
            </td>
        `;
    });
}

// Rest of your functions (submitHandler, editRecord, deleteRecord, validateInputs) remain the same

// Validation function
function validateInputs(name, studentId, email, contact) {
    if (!name || !studentId || !email || !contact) {
        alert("All fields are required.");
        return false;
    }
    
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert("Student Name should only contain letters.");
        return false;
    }
    
    if (!/^\d+$/.test(studentId)) {
        alert("Student ID should only contain numbers.");
        return false;
    }
    
    if (!/^\d{10}$/.test(contact)) {
        alert("Contact No should be a valid 10-digit number.");
        return false;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    return true;
}

function loadRecords() {
    initializeStorage();
    const students = JSON.parse(localStorage.getItem('students'));
    recordsTable.innerHTML = '';
    
    students.forEach((student, index) => {
        const row = recordsTable.insertRow();
        const cells = [
            student.name,
            student.studentId,
            student.email,
            student.contact,
            `<button class="edit" onclick="editRecord(${index})">Edit</button>
             <button class="delete" onclick="deleteRecord(${index})">Delete</button>`
        ];

        cells.forEach((content, i) => {
            const cell = row.insertCell(i);
            i === 4 ? cell.innerHTML = content : cell.textContent = content;
        });
    });
}

function editRecord(index) {
    const students = JSON.parse(localStorage.getItem('students'));
    const student = students[index];
    
    document.getElementById('name').value = student.name;
    document.getElementById('studentId').value = student.studentId;
    document.getElementById('email').value = student.email;
    document.getElementById('contact').value = student.contact;

    studentForm.onsubmit = function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const studentId = document.getElementById('studentId').value.trim();
        const email = document.getElementById('email').value.trim();
        const contact = document.getElementById('contact').value.trim();

        if (!validateInputs(name, studentId, email, contact)) return;

        students[index] = { name, studentId, email, contact };
        localStorage.setItem('students', JSON.stringify(students));
        loadRecords();
        studentForm.reset();
        studentForm.onsubmit = submitHandler;
    };
}

function deleteRecord(index) {
    if (confirm('Are you sure you want to delete this record?')) {
        const students = JSON.parse(localStorage.getItem('students'));
        students.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(students));
        loadRecords();
    }
}

function submitHandler(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const studentId = document.getElementById('studentId').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();

    if (!validateInputs(name, studentId, email, contact)) return;

    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({ name, studentId, email, contact });
    localStorage.setItem('students', JSON.stringify(students));
    loadRecords();
    this.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    studentForm = document.getElementById('studentForm');
    recordsTable = document.getElementById('recordsTable').getElementsByTagName('tbody')[0];
    studentForm.addEventListener('submit', submitHandler);
    loadRecords();
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});