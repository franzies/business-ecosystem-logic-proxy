/**
 * @author Francisco de la Vega <fdelavega@conwet.com>
 *         Jaime Pajuelo <jpajuelo@conwet.com>
 */

(function () {

    'use strict';

    angular
        .module('app')
        .config(RouteConfig);

    function RouteConfig($stateProvider, $injector) {

        if ($injector.has('LOGGED_USER')) {

            $stateProvider
                .state('inventory.product', {
                    url: '/product?status',
                    params: {
                        customer: true,
                        flow: 1
                    },
                    data: {
                        filters: ['status']
                    },
                    templateUrl: 'inventory/product/search',
                    controller: 'InventorySearchCtrl as searchVM'

                })
                .state('inventory.product.detail', {
                    url: '/:productId',
                    templateUrl: 'inventory/product/detail',
                    controller: 'InventoryDetailsCtrl as detailVM'
                });
        }
    }

})();
