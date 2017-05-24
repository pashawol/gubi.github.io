$(document).ready(function () {
	var owl = $('.owl-carousel');
    owl.owlCarousel({
      itemsCustom : [
      [0, 1],
      [449, 2],
      [767, 2],
      [1023, 3]
      ],
      navigation : false,
      pagination: true,
      rewindNav : true
    });
    	$(".fancybox").fancybox(
    	{
        openEffect  : 'elastic',
        closeEffect : 'elastic',
        helpers : {
            title : {
                type : 'inside'
            }
        }
    	});
		$("#phone_modal").mask("+7(999) 999-99-99");
		$("#phone").mask("+7(999) 999-99-99");
		$('#Modal').modal('hide');
		
		HeightBlock = function () {
			var Block = $('.wrap-section.catalog .item');
			$(Block).css('height','auto');
			var BlockHeight = $(Block).outerHeight();
			var BlockLength = $(Block).length;
			var Array = []
			$(BlockHeight).css('height',BlockHeight);
			for (i=0;i<BlockLength;i++) {
				var BlockIndex = $(Block)[i];
				var BlockIndexHeight = $(BlockIndex).outerHeight();
				Array.push(BlockIndexHeight)
			}
			var max, min, arr=Array;
			min=arr[0];
			max=arr[0];
			for(var i=0; i<arr.length; i++) {
				if(arr[i]<min) min=arr[i];
				if(arr[i]>max) max=arr[i];
			}
			$(Block).css('height',max);
		}
		HeightBlockCol = function () {
			var Block = $('.wrap-section.collection .item');
			$(Block).css('height','auto');
			var BlockHeight = $(Block).outerHeight();
			var BlockLength = $(Block).length;
			var Array = []
			$(BlockHeight).css('height',BlockHeight);
			for (i=0;i<BlockLength;i++) {
				var BlockIndex = $(Block)[i];
				var BlockIndexHeight = $(BlockIndex).outerHeight();
				Array.push(BlockIndexHeight)
			}
			var max, min, arr=Array;
			min=arr[0];
			max=arr[0];
			for(var i=0; i<arr.length; i++) {
				if(arr[i]<min) min=arr[i];
				if(arr[i]>max) max=arr[i];
			}
			$(Block).css('height',max);
		}
		HeightBlock();
		HeightBlockCol();
	$(window).resize(function(){
		HeightBlock();
		HeightBlockCol();		
	});
	$(".btn").click(function(){
		$("#Modal form input.order").val($(this).data('order'))
	})
});