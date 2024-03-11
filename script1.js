function search() {
    var searchInput = document.getElementById('searchInput').value;
  }
  
  document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var destination = document.getElementById('destinationInput').value;
    var checkInDate = document.getElementById('checkInDate').value;
    var checkOutDate = document.getElementById('checkOutDate').value;
    var guests = document.getElementById('guestsInput').value;
  });
  