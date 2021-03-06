/**
Sekki.js

Copyright (c) 2016 NOT SO BAD

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

(function(global) {
    "use strict;"

    function Sekki() {
		this.current = function(){
	    	var date = new Date();
			var row = null;

			this.raw.some(function(val,index,array){
				row_date = new Date(Date.parse(val.date+"/"+date.getFullYear()));

				if(date <= row_date) {
					return row;
				}else {
					row = val;
				}
			});
			return row;
		}

		this.random = function(date){
			return this.raw[Math.floor(Math.random()*this.raw.length)];
		}

		this.raw = [
			{"sekki":"冬至","order":"末候","kou":"雪下出麦","kou_kana":"ゆきわたりてむぎいづる","meaning":"雪の下で麦が芽を出す","date":"1/1","color":"濃縹","color_kana":"こきはなだ","color_code":"#122c49"},
			{"sekki":"小寒","order":"初候","kou":"芹乃栄","kou_kana":"せりすなわちさかう","meaning":"芹がよく生育する","date":"1/6","color":"縹色","color_kana":"はなだいろ","color_code":"#2792C3"},
			{"sekki":"小寒","order":"次候","kou":"水泉動","kou_kana":"しみずあたたかをふくむ","meaning":"地中で凍った泉が動き始める","date":"1/11","color":"新橋色","color_kana":"しんばしいろ","color_code":"#59B9C6"},
			{"sekki":"小寒","order":"末候","kou":"雉始雊","kou_kana":"きじはじめてなく","meaning":"雄の雉が鳴き始める","date":"1/16","color":"中縹","color_kana":"なかはなだ","color_code":"#2E6A87"},
			{"sekki":"大寒","order":"初候","kou":"款冬華","kou_kana":"ふきのはなさく","meaning":"蕗の薹（ふきのとう）が蕾を出す","date":"1/21","color":"藍色","color_kana":"あいいろ","color_code":"#165E83"},
			{"sekki":"大寒","order":"次候","kou":"水沢腹堅","kou_kana":"さわみずこおりつめる","meaning":"沢に氷が厚く張りつめる","date":"1/26","color":"熨斗目色","color_kana":"のしめいろ","color_code":"#175B66"},
			{"sekki":"大寒","order":"末候","kou":"鶏始乳","kou_kana":"にわとりはじめてとやにつく","meaning":"鶏が卵を産み始める","date":"1/31","color":"孔雀青","color_kana":"くじゃくあお","color_code":"#00708E"},
			{"sekki":"立春","order":"初候","kou":"東風解凍","kou_kana":"こちこおりをとく","meaning":"東風が厚い氷を解かし始める","date":"2/4","color":"菜の花色","color_kana":"なのはないろ","color_code":"#FFEC47"},
			{"sekki":"立春","order":"次候","kou":"黄鶯睍睆","kou_kana":"うぐいすなく","meaning":"鶯が山里で鳴き始める","date":"2/9","color":"卵色","color_kana":"たまごいろ","color_code":"#FCD575"},
			{"sekki":"立春","order":"末候","kou":"魚上氷","kou_kana":"うおこおりをいずる","meaning":"割れた氷の間から魚が飛び出る","date":"2/14","color":"菜種色","color_kana":"なたねいろ","color_code":"#A69425"},
			{"sekki":"雨水","order":"初候","kou":"土脉潤起","kou_kana":"つちのしょううるおいおこる","meaning":"雨が降って土が湿り気を含む","date":"2/19","color":"黄水仙","color_kana":"きすいせん","color_code":"#F2D675"},
			{"sekki":"雨水","order":"次候","kou":"霞始靆","kou_kana":"かすみはじめてたなびく","meaning":"霞がたなびき始める","date":"2/24","color":"桑色","color_kana":"くわいろ","color_code":"#DABC91"},
			{"sekki":"雨水","order":"末候","kou":"草木萌動","kou_kana":"そうもくめばえいずる","meaning":"草木が芽吹き始める","date":"2/28","color":"浅緑","color_kana":"あさみどり","color_code":"#88CB7F"},
			{"sekki":"啓蟄","order":"初候","kou":"蟄虫啓戸","kou_kana":"すごもりむしとをひらく","meaning":"冬蘢りの虫が出て来る","date":"3/5","color":"若緑","color_kana":"わかみどり","color_code":"#98D98E"},
			{"sekki":"啓蟄","order":"次候","kou":"桃始笑","kou_kana":"ももはじめてさく","meaning":"桃の花が咲き始める","date":"3/10","color":"若葉色","color_kana":"わかばいろ","color_code":"#B9D08B"},
			{"sekki":"啓蟄","order":"末候","kou":"菜虫化蝶","kou_kana":"なむしちょうとなる","meaning":"青虫が羽化して紋白蝶になる","date":"3/15","color":"青磁色","color_kana":"せいじいろ","color_code":"#7EBEA5"},
			{"sekki":"春分","order":"初候","kou":"雀始巣","kou_kana":"すずめはじめてすくう","meaning":"雀が巣を構え始める","date":"3/20","color":"豌豆緑","color_kana":"えんどうみどり","color_code":"#A4BA5F"},
			{"sekki":"春分","order":"次候","kou":"桜始開","kou_kana":"さくらはじめてひらく","meaning":"桜の花が咲き始める","date":"3/25","color":"若竹色","color_kana":"わかたけいろ","color_code":"#68BE8D"},
			{"sekki":"春分","order":"末候","kou":"雷乃発声","kou_kana":"かみなりすなわちこえをはっす","meaning":"遠くで雷の音がし始める","date":"3/30","color":"白緑","color_kana":"びゃくろく","color_code":"#D6E9CA"},
			{"sekki":"清明","order":"初候","kou":"玄鳥至","kou_kana":"つばめきたる","meaning":"燕が南からやって来る","date":"4/4","color":"桜色","color_kana":"さくらいろ","color_code":"#FEF4F4"},
			{"sekki":"清明","order":"次候","kou":"鴻雁北","kou_kana":"こうがんきたへかえる","meaning":"雁が北へ渡って行く","date":"4/9","color":"浅緋","color_kana":"うすあけ","color_code":"#DF7163"},
			{"sekki":"清明","order":"末候","kou":"虹始見","kou_kana":"にじはじめてあらわる","meaning":"雨の後に虹が出始める","date":"4/14","color":"桃花色","color_kana":"ももはないろ","color_code":"#E198B4"},
			{"sekki":"穀雨","order":"初候","kou":"葭始生","kou_kana":"あしはじめてしょうず","meaning":"葦が芽を吹き始める","date":"4/20","color":"紅梅色","color_kana":"こうばいいろ","color_code":"#F2A0A1"},
			{"sekki":"穀雨","order":"次候","kou":"霜止出苗","kou_kana":"しもやんでなえいづる","meaning":"霜が終り稲の苗が生長する","date":"4/25","color":"薄紅","color_kana":"うすべに","color_code":"#F0908D"},
			{"sekki":"穀雨","order":"末候","kou":"牡丹華","kou_kana":"ぼたんはなさく","meaning":"牡丹の花が咲く","date":"4/30","color":"桜桃色","color_kana":"おうとういろ","color_code":"#E25C83"},
			{"sekki":"立夏","order":"初候","kou":"蛙始鳴","kou_kana":"かわずはじめてなく","meaning":"蛙が鳴き始める","date":"5/5","color":"若苗色","color_kana":"わかなえいろ","color_code":"#C7DC68"},
			{"sekki":"立夏","order":"次候","kou":"蚯蚓出","kou_kana":"みみずいづる","meaning":"蚯蚓が地上に這出る","date":"5/10","color":"若草色","color_kana":"わかくさいろ","color_code":"#C3D825"},
			{"sekki":"立夏","order":"末候","kou":"竹笋生","kou_kana":"たけのこしょうず","meaning":"筍が生えて来る","date":"5/15","color":"若芽色","color_kana":"わかめいろ","color_code":"#E0EBAF"},
			{"sekki":"小満","order":"初候","kou":"蚕起食桑","kou_kana":"かいこおきてくわをはむ","meaning":"蚕が桑を盛んに食べ始める","date":"5/20","color":"抹茶色","color_kana":"まっちゃいろ","color_code":"#C5C56A"},
			{"sekki":"小満","order":"次候","kou":"紅花栄","kou_kana":"べにばなさかう","meaning":"紅花が盛んに咲く","date":"5/25","color":"萌葱色","color_kana":"もえぎいろ","color_code":"#86A22F"},
			{"sekki":"小満","order":"末候","kou":"麦秋至","kou_kana":"むぎのときいたる","meaning":"麦が熟し麦秋となる","date":"5/30","color":"草色","color_kana":"くさいろ","color_code":"#7B8D42"},
			{"sekki":"芒種","order":"初候","kou":"螳螂生","kou_kana":"かまきりしょうず","meaning":"螳螂が生まれ出る","date":"6/5","color":"浅紫","color_kana":"あさむらさき","color_code":"#C4A3BF"},
			{"sekki":"芒種","order":"次候","kou":"腐草為蛍","kou_kana":"くされたるくさほたるとなる","meaning":"腐った草が蒸れ蛍になる","date":"6/10","color":"菖蒲色","color_kana":"しょうぶいろ","color_code":"#674196"},
			{"sekki":"芒種","order":"末候","kou":"梅子黄","kou_kana":"うめのみきばむ","meaning":"梅の実が黄ばんで熟す","date":"6/15","color":"若紫","color_kana":"わかむらさき","color_code":"#BC64A4"},
			{"sekki":"夏至","order":"初候","kou":"乃東枯","kou_kana":"なつかれくさかるる","meaning":"夏枯草が枯れる","date":"6/21","color":"半色","color_kana":"はしたいろ","color_code":"#A69ABD"},
			{"sekki":"夏至","order":"次候","kou":"菖蒲華","kou_kana":"あやめはなさく","meaning":"あやめの花が咲く","date":"6/26","color":"桔梗色","color_kana":"ききょういろ","color_code":"#5654A2"},
			{"sekki":"夏至","order":"末候","kou":"半夏生","kou_kana":"はんげしょうず","meaning":"烏柄杓が生える","date":"7/1","color":"露草色","color_kana":"つゆくさいろ","color_code":"#38A1DB"},
			{"sekki":"小暑","order":"初候","kou":"温風至","kou_kana":"あつかぜいたる","meaning":"暖い風が吹いて来る","date":"7/7","color":"浅縹","color_kana":"あさはなだ","color_code":"#84B9CB"},
			{"sekki":"小暑","order":"次候","kou":"蓮始開","kou_kana":"はすはじめてひらく","meaning":"蓮の花が開き始める","date":"7/12","color":"淡群青","color_kana":"うすぐんじょう","color_code":"#769DCD"},
			{"sekki":"小暑","order":"末候","kou":"鷹乃学習","kou_kana":"たかすなわちわざをなす","meaning":"鷹の幼鳥が飛ぶことを覚える","date":"7/17","color":"白群","color_kana":"びゃくぐん","color_code":"#83CCD2"},
			{"sekki":"大暑","order":"初候","kou":"桐始結花","kou_kana":"きりはじめてはなをむすぶ","meaning":"桐の実が生り始める","date":"7/22","color":"空色","color_kana":"そらいろ","color_code":"#A0D8EF"},
			{"sekki":"大暑","order":"次候","kou":"土潤溽暑","kou_kana":"つちうるおうてむしあつし","meaning":"土が湿って蒸暑くなる","date":"7/27","color":"藍白","color_kana":"あいじろ","color_code":"#EBF6F7"},
			{"sekki":"大暑","order":"末候","kou":"大雨時行","kou_kana":"たいうときどきにふる","meaning":"時として大雨が降る","date":"8/1","color":"水色","color_kana":"みずいろ","color_code":"#BCE2E8"},
			{"sekki":"立秋","order":"初候","kou":"涼風至","kou_kana":"すづかぜいたる","meaning":"涼しい風が立ち始める","date":"8/7","color":"薄浅葱","color_kana":"うすあさぎ","color_code":"#69C2C7"},
			{"sekki":"立秋","order":"次候","kou":"寒蝉鳴","kou_kana":"ひぐらしなく","meaning":"蜩が鳴き始める","date":"8/12","color":"浅葱色","color_kana":"あさぎいろ","color_code":"#00A3AF"},
			{"sekki":"立秋","order":"末候","kou":"蒙霧升降","kou_kana":"ふかききりまとう","meaning":"深い霧が立ち込める","date":"8/17","color":"花浅葱","color_kana":"はなあさぎ","color_code":"#2A83A2"},
			{"sekki":"処暑","order":"初候","kou":"綿柎開","kou_kana":"わたのはなしべひらく","meaning":"綿を包む萼（がく）が開く","date":"8/23","color":"紺碧","color_kana":"こんぺき","color_code":"#007BBB"},
			{"sekki":"処暑","order":"次候","kou":"天地始粛","kou_kana":"てんちはじめてさむし","meaning":"ようやく暑さが鎮まる","date":"8/28","color":"瑠璃色","color_kana":"るりいろ","color_code":"#1E50A2"},
			{"sekki":"処暑","order":"末候","kou":"禾乃登","kou_kana":"こくものすなわちみのる","meaning":"稲が実る","date":"9/2","color":"黄丹","color_kana":"おうに","color_code":"#EE7948"},
			{"sekki":"白露","order":"初候","kou":"草露白","kou_kana":"くさのつゆしろし","meaning":"草に降りた露が白く光る","date":"9/7","color":"人参色","color_kana":"にんじんいろ","color_code":"#EC6800"},
			{"sekki":"白露","order":"次候","kou":"鶺鴒鳴","kou_kana":"せきれいなく","meaning":"鶺鴒（せきれい）が鳴き始める","date":"9/12","color":"珊瑚色","color_kana":"さんごいろ","color_code":"#F5B1AA"},
			{"sekki":"白露","order":"末候","kou":"玄鳥去","kou_kana":"つばめさる","meaning":"燕が南へ帰って行く","date":"9/17","color":"緋色","color_kana":"ひいろ","color_code":"#D3381C"},
			{"sekki":"秋分","order":"初候","kou":"雷乃収声","kou_kana":"かみなりすなわちこえをおさむ","meaning":"雷が鳴り響かなくなる","date":"9/22","color":"猩々緋","color_kana":"しょうじょうひ","color_code":"#E2041B"},
			{"sekki":"秋分","order":"次候","kou":"蟄虫坏戸","kou_kana":"むしかくれてとをふさぐ","meaning":"虫が土中に掘った穴をふさぐ","date":"9/27","color":"茜色","color_kana":"あかねいろ","color_code":"#B7282E"},
			{"sekki":"秋分","order":"末候","kou":"水始涸","kou_kana":"みずはじめてかる","meaning":"田畑の水を干し始める","date":"10/2","color":"古代紫","color_kana":"こだいむらさき","color_code":"#895B8A"},
			{"sekki":"寒露","order":"初候","kou":"鴻雁来","kou_kana":"こうがんきたる","meaning":"雁が飛来し始める","date":"10/8","color":"江戸紫","color_kana":"えどむらさき","color_code":"#745399"},
			{"sekki":"寒露","order":"次候","kou":"菊花開","kou_kana":"きくのはなひらく","meaning":"菊の花が咲く","date":"10/13","color":"二藍","color_kana":"ふたあい","color_code":"#915C8B"},
			{"sekki":"寒露","order":"末候","kou":"蟋蟀在戸","kou_kana":"きりぎりすとにあり","meaning":"蟋蟀が戸の辺りで鳴く","date":"10/18","color":"葡萄色","color_kana":"えびいろ","color_code":"#640125"},
			{"sekki":"霜降","order":"初候","kou":"霜始降","kou_kana":"しもはじめてふる","meaning":"霜が降り始める","date":"10/23","color":"錆桔梗","color_kana":"さびききょう","color_code":"#695F88"},
			{"sekki":"霜降","order":"次候","kou":"霎時施","kou_kana":"こさめときどきふる","meaning":"小雨がしとしと降る","date":"10/28","color":"濃紫","color_kana":"こきむらさき","color_code":"#3E214C"},
			{"sekki":"霜降","order":"末候","kou":"楓蔦黄","kou_kana":"もみじつたきばむ","meaning":"もみじや蔦が黄葉する","date":"11/2","color":"刈安","color_kana":"かりやす","color_code":"#F5E56B"},
			{"sekki":"立冬","order":"初候","kou":"山茶始開","kou_kana":"つばきはじめてひらく","meaning":"山茶花が咲き始める","date":"11/7","color":"鬱金色","color_kana":"うこんいろ","color_code":"#FABF14"},
			{"sekki":"立冬","order":"次候","kou":"地始凍","kou_kana":"ちはじめてこおる","meaning":"大地が凍り始める","date":"11/12","color":"藁色","color_kana":"わらいろ","color_code":"#D5C752"},
			{"sekki":"立冬","order":"末候","kou":"金盞香","kou_kana":"きんせんかさく","meaning":"水仙の花が咲く","date":"11/17","color":"黄土色","color_kana":"おうどいろ","color_code":"#C39143"},
			{"sekki":"小雪","order":"初候","kou":"虹蔵不見","kou_kana":"にじかくれてみえず","meaning":"虹を見かけなくなる","date":"11/22","color":"枯草色","color_kana":"かれくさいろ","color_code":"#E3BE88"},
			{"sekki":"小雪","order":"次候","kou":"朔風払葉","kou_kana":"きたかぜこのはをはらう","meaning":"北風が木の葉を払い除ける","date":"11/27","color":"芥子色","color_kana":"からしいろ","color_code":"#C8A65D"},
			{"sekki":"小雪","order":"末候","kou":"橘始黄","kou_kana":"たちばなはじめてきばむ","meaning":"橘の実が黄色くなり始める","date":"12/2","color":"薄色","color_kana":"うすいろ","color_code":"#A89DAC"},
			{"sekki":"大雪","order":"初候","kou":"閉塞成冬","kou_kana":"そらさむくふゆとなる","meaning":"天地の気が塞がって冬となる","date":"12/7","color":"藤鼠","color_kana":"ふじねず","color_code":"#A6A5C4"},
			{"sekki":"大雪","order":"次候","kou":"熊蟄穴","kou_kana":"くまあなにこもる","meaning":"熊が冬眠のために穴に隠れる","date":"12/11","color":"鳩羽鼠","color_kana":"はとばねずみ","color_code":"#9E8B8E"},
			{"sekki":"大雪","order":"末候","kou":"鱖魚群","kou_kana":"さけのうおむらがる","meaning":"鮭が群がり川を上る","date":"12/16","color":"牡丹鼠","color_kana":"ぼたんねず","color_code":"#785863"},
			{"sekki":"冬至","order":"初候","kou":"乃東生","kou_kana":"なつかくれくさしょうず","meaning":"夏枯草が芽を出す","date":"12/21","color":"中紫","color_kana":"なかむらさき","color_code":"#846582"},
			{"sekki":"冬至","order":"次候","kou":"麋角解","kou_kana":"おおしかのつのおつる","meaning":"大鹿が角を落とす","date":"12/26","color":"鳩羽紫","color_kana":"はとばむらさき","color_code":"#6D6981"}
		];
    }

    // Exports ----------------------------------------------
    if ("process" in global) {
        module["exports"] = YourModule;
    }
    global["Sekki"] = Sekki;

})((this || 0).self || global);
