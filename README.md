## Usage

```html:index.html
<script type="text/javascript" src="sekki.min.js">
<script>
	var sekki = new Sekki();
  
  // Show current sekki
	var current = sekki.current();
  var kou = sekki.kou; //雪下出麦
	var kou_kana = sekki.kou_kana; //ゆきわたりてむぎいづる
	var sekki_name = sekki.sekki; //冬至
	var sekki_order = sekki.order; //末候
	var start_date = sekki.date; //1/1
	var meaning = sekki.meaning; //雪の下で麦が芽を出す
  var color = sekki.color; //濃縹
  var color_kana = sekki.color_kana; //こきはなだ
  var color_code = sekki.color_code; //#122c49
  
  // Get all sekki data
  var all_sekki = sekki.raw(); //[{"sekki":"冬至","order":"末候","kou":"雪下出麦","kou_kana":"ゆきわたりてむぎいづる","meaning":"雪の下で麦が芽を出す","date":"1/1","color":"濃縹","color_kana":"こきはなだ","color_code":"#122c49"},...
  
  // Get random sekki
  var random = sekki.random(); //{"sekki":"小寒","order":"次候","kou":"水泉動","kou_kana":"しみずあたたかをふくむ",...
</script>
```

## License
Copyright (c) 2016 NOT SO BAD
Released under the MIT license
http://opensource.org/licenses/mit-license.php
