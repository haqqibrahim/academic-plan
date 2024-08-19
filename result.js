document.getElementById('results-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const matricNumber = document.getElementById('matric-number').value;
    const academicLevel = document.getElementById('academic-level').value;
    const semester = document.getElementById('semester').value;

    const resultsTableContainer = document.getElementById('results-table-container');

    // Sample data for demonstration purposes
    const sampleResults = [
        { courseCode: 'CSC401', courseTitle: 'Introduction to Computer Science', grade: 'A' },
        { courseCode: 'MTH402', courseTitle: 'Calculus for Scientists', grade: 'B+' },
        { courseCode: 'CSC402', courseTitle: 'Data Structures', grade: 'A' },
        { courseCode: 'CSC403', courseTitle: 'Algorithms', grade: 'A-' },
        { courseCode: 'CSC408', courseTitle: 'Computer Networks', grade: 'A-' },
        { courseCode: 'CSC410', courseTitle: 'Artificial Intelligence', grade: 'F' },
        { courseCode: 'CSC409', courseTitle: 'Software Engineering', grade: 'A-' },

    ];

    // Clear previous results
    resultsTableContainer.innerHTML = '';

    // Create results table
    const table = document.createElement('table');
    table.classList.add('results-table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Course Code', 'Course Title', 'Grade'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    sampleResults.forEach(result => {
        const row = document.createElement('tr');
        Object.values(result).forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    resultsTableContainer.appendChild(table);
});
