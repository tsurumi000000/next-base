App = {
  web3Provider: null,
  contracts: {},

  init: function () {
    // Load pets.
    $.getJSON('../pets.json', function (data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return App.initWeb3();
  },

  initWeb3: function () {
    // まず、すでにアクティブなWeb3インスタンスがあるかどうかを確認
    // （EthereumブラウザのMistや、MetaMask拡張機能を備えたChromeなどのブラウザでは、独自のweb3インスタンスが使用されます）。
    // 既存のweb3インスタンスが存在する場合、そのプロバイダを取得してWeb3オブジェクトを作成
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // 既存のweb3インスタンスが存在しない場合は、ローカルプロバイダに基づいてweb3オブジェクトを作成 
      App.web3Provider = new Web3.providers.HttpProvieder('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function () {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents: function () {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function (adopters, account) {
    /*
     * Replace me...
     */
  },

  handleAdopt: function (event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
