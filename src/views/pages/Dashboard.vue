<template>
    <div>
      <h1>Dashboard</h1>
  
      <!-- DataTable with export options -->
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tableData" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.position }}</td>
            </tr>
          </tbody>
        </table>
  
        <!-- Export buttons -->
        <div class="mt-3">
          <button class="btn btn-primary" @click="exportToPDF">Export to PDF</button>
          <button class="btn btn-success" @click="exportToCSV">Export to CSV</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import jsPDF from 'jspdf';
  import { utils, writeFile } from 'xlsx';
  
  export default {
    name: 'Dashboard',
    data() {
      return {
        // Define table data
        tableData: [
          { id: 1, name: 'John Doe', age: 28, position: 'Developer' },
          { id: 2, name: 'Jane Smith', age: 32, position: 'Designer' },
          { id: 3, name: 'Mark Johnson', age: 25, position: 'Manager' }
        ]
      };
    },
    methods: {
      // Export table data to PDF
      exportToPDF() {
        const doc = new jsPDF();
        const headers = ['ID', 'Name', 'Age', 'Position'];
        const data = this.tableData.map(item => [
          item.id,
          item.name,
          item.age,
          item.position
        ]);
  
        doc.autoTable({
          head: [headers],
          body: data,
        });
  
        doc.save('table-data.pdf');
      },
  
      // Export table data to CSV
      exportToCSV() {
        const worksheet = utils.json_to_sheet(this.tableData);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, 'Table Data');
        writeFile(workbook, 'table-data.csv');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Custom styling */
  .table-responsive {
    max-width: 100%;
    overflow-x: auto;
  }
  </style>
  