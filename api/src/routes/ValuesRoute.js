const StatusEnums = require('../enums/StatusEnums');
const PriorityEnums = require('../enums/PriorityEnums');
const ApiResponse = require('../models/ApiResponse');

class ValuesRoute {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    /**
     * Get all status
     * @reutrn ApiResponse
     */
    this.router.get('/values/statuses', async (req, res) => {
      try {
        const statuses = Object.keys(StatusEnums);
        res.send(new ApiResponse(true, 200, 'Görev statuleri listelendi.', statuses, {}));
      }
      catch (err) {
        res.send(new ApiResponse(false, 500, 'Görev statuleri listelenirken hata oluştu.', {}, err));
      }
    });

    /**
     * Get all priority
     * @reutrn ApiResponse
     */
    this.router.get('/values/priorities', async (req, res) => {
      try {
        const statuses = Object.keys(PriorityEnums);
        res.send(new ApiResponse(true, 200, 'Görev öncelik durumları listelendi.', statuses, {}));
      }
      catch (err) {
        res.send(new ApiResponse(false, 500, 'Görev öncelik durumları listelenirken hata oluştu.', {}, err));
      }
    });
  }
}

module.exports = ValuesRoute;
