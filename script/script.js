$(document).ready(function(){

    //create card using javascripts
    // $('#card-content').append('<div class="card my-3"><img class="card-img-top" src="images/badik.jpg" /><div class="card-body"><h5 class="card-title">Badik</h5><h5 class="card-title">Category: textile</h5><h5 class="card-title">Name: Keris</h5><p class="card-text">Badik adalah senjata tradisional yang berasal dari Sulawesi Selatan. Badik merupakan senjata tradisional yang digunakan oleh masyarakat Bugis dan Makassar. Badik memiliki bentuk yang unik dan berbeda dengan senjata tradisional lainnya. Badik memiliki bentuk yang menyerupai pisau dengan gagang yang pendek. Badik memiliki panjang sekitar 30 cm dan memiliki lebar sekitar 3 cm. Badik memiliki bentuk yang menyerupai pisau dengan gagang yang pendek. Badik memiliki panjang sekitar 30 cm dan memiliki lebar sekitar 3 cm. Badik memiliki bentuk yang menyerupai pisau dengan gagang yang pendek. Badik memiliki panjang sekitar 30 cm dan memiliki lebar sekitar 3 cm.</p><h5 class="card-title">Description: tenunan tangan asli</h5><h5 class="card-title">Date: 1250 Hijrah</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div>')

    //getJSON - expecting response data in JSON format
    // $.getJSON("entity/collections.json", function(data){
    //   console.log(data);
    // }).fail(function(error){
    //   console.log(error);
    // });

    //get
    // $.get("entity/collections.json", function(data){
    //   console.log(data);
    // }).fail(function(error){
    //   console.log(error);
    // });

    //ajax
    $.ajax({
      url: "entity/collections.json",
      type: "get",
      success: function(data){
        let semuaCollection = data.semuaCollection;
        let currentCategory = 'all'

        function filterCard(category){
          $('#card-content').empty();
          
          $.each(semuaCollection, function(i, koleksi){
            if(category === 'all collections'){
              $('#view-collection').text("all collections");
              $('#card-content').append('<div class="col-md-4"><div class="card my-3"><img class="card-img-top" src="images/'+koleksi.gambar+'" /><div class="card-body"><h5 class="card-title">'+koleksi.nama+'</h5><h5 class="card-title">Category: '+koleksi.kategori+'</h5><p class="card-text">'+koleksi.desc+'</p><h5 class="card-title">Date:'+koleksi.date+'</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>')
            }else if(category === koleksi.kategori){
              $('#view-collection').text(currentCategory + ' collections')
              $('#card-content').append('<div class="col-md-4"><div class="card my-3"><img class="card-img-top" src="images/'+koleksi.gambar+'" /><div class="card-body"><h5 class="card-title">'+koleksi.nama+'</h5><h5 class="card-title">Category: '+koleksi.kategori+'</h5><p class="card-text">'+koleksi.desc+'</p><h5 class="card-title">Date:'+koleksi.date+'</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>')
            }
          })
        }

        filterCard(currentCategory);

        //add click event listener to navbar items
        $('.nav-item').click(function(){
          currentCategory = $(this).data('category');
          $('.nav-item').removeClass('active');
          $(this).addClass('active');
          filterCard(currentCategory);
        })

        // $.each(semuaCollection, function(i, koleksi){
        //   console.log(i);
        //   console.log(koleksi)
        //   $('#card-content').append('<div class="col-md-4"><div class="card my-3"><img class="card-img-top" src="images/'+koleksi.gambar+'" /><div class="card-body"><h5 class="card-title">'+koleksi.nama+'</h5><h5 class="card-title">Category: '+koleksi.kategori+'</h5><h5 class="card-title">Name: Keris</h5><p class="card-text">'+koleksi.desc+'</p><h5 class="card-title">Date:'+koleksi.date+'</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>')
        // })

      },
      error: function(error){
        console.log(error)
      }

    })
  })