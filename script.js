// This script dynamically generates table rows and handles pagination
// For simplicity, pagination buttons are non-functional in this example
// You can add functionality to them based on your requirements
// This script assumes you have an array of data called 'tableData'

const tbody = document.querySelector('tbody');

function generateTableRows(data) {
    tbody.innerHTML = '';
    data.forEach(rowData => {
        const tr = document.createElement('tr');
        Object.values(rowData).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

// Example data
const tableData = [{
        Name: 'Pranjal',
        'Service Name': 'PM',
        Date: '2011/11/28',
        Profit: '$162,700'
    },
    {
        Name: 'paritosh',
        'Service Name': 'PM',
        Date: '2007/10/09',
        Profit: '$1,200,000'
    },
    {
        Name: 'palav',
        'Service Name': 'B2b',
        Date: '2009/01/12',
        Profit: '$86,000'
    },
    {
        Name: 'Moumita',
        'Service Name': 'HR',
        Date: '2012/10/13',
        Profit: '$132,000'
    },
    {
        Name: 'Mitesh',
        'Service Name': 'Graphics',
        Date: '2011/06/07',
        Profit: '$206,850'
    },
    {
        Name: 'Srinivas',
        'Service Name': 'Frontend',
        Date: '2012/12/02',
        Profit: '$372,000'
    },
    {
        Name: 'hritik',
        'Service Name': 'Graphics',
        Date: '2011/05/03',
        Profit: '$163,500'
    },
    {
        Name: 'abc',
        'Service Name': 'HR',
        Date: '2011/12/12',
        Profit: '$106,450'
    },
    {
        Name: 'xyz',
        'Service Name': 'B2b',
        Date: '2011/12/06',
        Profit: '$145,600'
    },
    {
        Name: 'bcd',
        'Service Name': 'B2b',
        Date: '2012/03/29',
        Profit: '$433,060'
    }
];

generateTableRows(tableData);