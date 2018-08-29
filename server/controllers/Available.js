var available = () => {

    function read(req, res) {
           var dates = [
               4, 
               5,
               6

           ];

            res.send(dates);
    }
    
	function create(req, res) {
		
	}

   return {
       read,
       create
   };

}

module.exports = available();