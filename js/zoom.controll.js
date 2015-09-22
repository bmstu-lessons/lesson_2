$.fn.addZoomControll = function() {
  
          this.each(function() {

            $image = $(this).find("img").first();
            $(this).append("<div class='buttons'>\
                <input type='range' class='zoom-range'>\
                <button class='zoom-out'>-</button>\
                <button class='zoom-in'>+</button>\
              </div>");
            $image.panzoom({
          $zoomIn: $(this).find(".zoom-in"),
                $zoomOut: $(this).find(".zoom-out"),
                $zoomRange: $(this).find(".zoom-range")
            });
          });
      };