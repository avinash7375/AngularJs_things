angular.module('studentApp', [])
  .controller('StudentController', function ($http) {
    var vm = this;

    vm.students = [];
    vm.newStudent = {};

    // Fetch students from server
    vm.getStudents = function () {
      $http.get('http://localhost:3000/api/students')
        .then(function (response) {
          vm.students = response.data;
        });
    };

    // Add new student
    vm.addStudent = function () {
      if (vm.newStudent.name && vm.newStudent.age && vm.newStudent.course) {
        $http.post('http://localhost:3000/api/students', vm.newStudent)
          .then(function (response) {
            vm.students.push(response.data);
            vm.newStudent = {}; // Reset form
          });
      }
    };

    // Delete student
    vm.deleteStudent = function (id) {
      $http.delete(`http://localhost:3000/api/students/${id}`)
        .then(function () {
          vm.getStudents(); // Refresh student list
        });
    };

    // Fetch all students initially
    vm.getStudents();
  });
