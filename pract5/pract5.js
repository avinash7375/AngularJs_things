<script>
  angular.module('errorHandlingApp', [])
    .controller('MainController', function($http) {
      var vm = this;
      vm.data = '';
      vm.errorMessage = '';

      vm.fetchData = function() {
        $http.get('https://jsonplaceholder.typicode.com/invalid-url')
          .then(function(response) {
            vm.data = response.data;
          })
          .catch(function(error) {
            vm.errorMessage = 'Failed to fetch data. Please try again later.';
            console.error('Error:', error);
          });
      };
    });
</script>
