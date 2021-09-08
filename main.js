function display() {
  var day = document.getElementById('Selectmealday').value;
  if (day=="0901") {
    document.getElementById('result').innerHTML = '유기농나물밥<br> 근대된장국<br> 배추겉절이<br> 간장양념장<br> 간장양념장<br> 볶음김치치즈롤까스<br> 고구마순들깨볶음<br> 곡물그대로';
  }

  if (day=="0902") {
    document.getElementById('result').innerHTML = '찹쌀밥<br> 쇠고기미역국<br> 콩나물겨자채<br> 배추김치<br> 케익<br> 돼지갈비찜';
  }

  if (day=="0903") {
    document.getElementById('result').innerHTML = '현미밥<br> 햄모듬찌개<br> 안동찜닭<br> 도토리묵오이무침<br> 총각김치<br> ';
  }

  if (day=="0904") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0905") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0906") {
    document.getElementById('result').innerHTML = '기장밥<br> 육개장<br> 순대야채볶음<br> 야채튀김(수제)<br> 콩나물무침<br> 깍두기';
  }

  if (day=="0907") {
    document.getElementById('result').innerHTML = '흑미밥<br> 동태매운탕<br> 메추리알장조림<br> 배추김치<br> 못난이쿠키<br> 유린기';
  }

  if (day=="0908") {
    document.getElementById('result').innerHTML = '마파두부덮밥<br> 팽이버섯계란국<br> 깐쇼새우<br> 총각김치<br> 달고나마카롱<br> 마카로니콘샐러드';
  }

  if (day=="0909") {
    document.getElementById('result').innerHTML = '보리밥<br> 사골우거지국<br> 녹두빈대떡<br> 김치소면무침<br> 깍두기<br> 청사과에이드';
  }

  if (day=="0910") {
    document.getElementById('result').innerHTML = '현미밥<br> 탕수육<br> 어묵채볶음<br> 배추김치<br> 비요뜨<br> 오징어무국 ';
  }

  if (day=="0911") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0912") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0913") {
    document.getElementById('result').innerHTML = '현미보리밥<br> 감자탕<br> 부추잡채/꽃빵<br> 연두부<br> 총각김치<br> 양념간장(두부)';
  }

  if (day=="0914") {
    document.getElementById('result').innerHTML = '기장밥<br> 콩나물김치국<br> 수제돈까스<br> 양배추샐러드<br> 깍두기<br> 오이지무침';
  }

  if (day=="0915") {
    document.getElementById('result').innerHTML = '카레라이스<br> 간장닭봉강정<br> 웨지감자<br> 양상추샐러드<br> 깍두기<br> 레몬에이드';
  }

  if (day=="0916") {
    document.getElementById('result').innerHTML = '수수밥<br> 콩나물북어국<br> 오리훈제채소무침<br> 핫도그<br> 배추김치<br> 푸딩';
  }

  if (day=="0917") {
    document.getElementById('result').innerHTML = '흑미밥<br> 쇠고기버섯국<br> 돼지고기김치찜<br> 돼지고기김치찜<br> 오이깍둑무침<br> 송편<br> 식혜';
  }

  if (day=="0918") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0919") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0920") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0921") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0922") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0923") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0924") {
    document.getElementById('result').innerHTML = '기장밥<br> 김치수제비국<br> 생선까스<br> 총각김치<br> 요구르트<br> 숙주미나리무침';
  }

  if (day=="0925") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0926") {
    document.getElementById('result').innerHTML = '급식이 없습니다.';
  }

  if (day=="0927") {
    document.getElementById('result').innerHTML = '흑미보리밥<br> 순두부찌개<br> 주먹떡갈비<br> 시금치고추장무침<br> 총각김치<br> 김구이';
  }

  if (day=="0928") {
    document.getElementById('result').innerHTML = '귀리밥<br> 얼갈이된장국<br> 돼지고기간장양념구이<br> 양배추찜<br> 우렁쌈장<br> 무생채<br> 붕어빵';
  }

  if (day=="0929") {
    document.getElementById('result').innerHTML = '팽이버섯된장국<br> 치킨또띠아<br> 배추겉절이<br> 꼬막비빔밥<br> 자몽음료 ';
  }

  if (day=="0930") {
    document.getElementById('result').innerHTML = '기장밥<br> 콩나물맑은국<br> 닭살야채볶음<br> 궁중군만두<br> 배추김치 ';
  }

}

function change() {
  var grade = document.getElementById('Schedule').value;
  if (grade=="101") {
    document.getElementById('1').innerHTML = '한국';
    document.getElementById('2').innerHTML = '수학';
    document.getElementById('3').innerHTML = '영어';
    document.getElementById('4').innerHTML = '수학';
    document.getElementById('5').innerHTML = '영어';
    document.getElementById('6').innerHTML = '국어';
    document.getElementById('7').innerHTML = '음연';
    document.getElementById('8').innerHTML = '체육';
    document.getElementById('9').innerHTML = '영어';
    document.getElementById('10').innerHTML = '국어';
    document.getElementById('11').innerHTML = '영어';
    document.getElementById('12').innerHTML = '정보';
    document.getElementById('13').innerHTML = '통과';
    document.getElementById('14').innerHTML = '정보';
    document.getElementById('15').innerHTML = '통과';
    document.getElementById('16').innerHTML = '과탐';
    document.getElementById('17').innerHTML = '통사';
    document.getElementById('18').innerHTML = '수학';
    document.getElementById('19').innerHTML = '통과';
    document.getElementById('20').innerHTML = '창체';
    document.getElementById('21').innerHTML = '수학';
    document.getElementById('22').innerHTML = '진로';
    document.getElementById('23').innerHTML = '국어';
    document.getElementById('24').innerHTML = '통사';
    document.getElementById('25').innerHTML = '창체';
    document.getElementById('26').innerHTML = '체육';
    document.getElementById('27').innerHTML = '통과';
    document.getElementById('28').innerHTML = '한국';
    document.getElementById('29').innerHTML = '한국';
    document.getElementById('30').innerHTML = '창체';
    document.getElementById('31').innerHTML = '통사';
    document.getElementById('32').innerHTML = '국어';
    document.getElementById('33').innerHTML = '통사';
    document.getElementById('34').innerHTML = '음연';

  }

  if (grade=="102") {
    document.getElementById('1').innerHTML = '수학';
    document.getElementById('2').innerHTML = '영어';
    document.getElementById('3').innerHTML = '통사';
    document.getElementById('4').innerHTML = '영어';
    document.getElementById('5').innerHTML = '통과';
    document.getElementById('6').innerHTML = '통사';
    document.getElementById('7').innerHTML = '한국';
    document.getElementById('8').innerHTML = '영어';
    document.getElementById('9').innerHTML = '음연';
    document.getElementById('10').innerHTML = '영어';
    document.getElementById('11').innerHTML = '국어';
    document.getElementById('12').innerHTML = '통사';
    document.getElementById('13').innerHTML = '통과';
    document.getElementById('14').innerHTML = '체육';
    document.getElementById('15').innerHTML = '통사';
    document.getElementById('16').innerHTML = '진로';
    document.getElementById('17').innerHTML = '수학';
    document.getElementById('18').innerHTML = '정보';
    document.getElementById('19').innerHTML = '수학';
    document.getElementById('20').innerHTML = '창체';
    document.getElementById('21').innerHTML = '음연';
    document.getElementById('22').innerHTML = '국어';
    document.getElementById('23').innerHTML = '한국';
    document.getElementById('24').innerHTML = '국어';
    document.getElementById('25').innerHTML = '창체';
    document.getElementById('26').innerHTML = '정보';
    document.getElementById('27').innerHTML = '체육';
    document.getElementById('28').innerHTML = '국어';
    document.getElementById('29').innerHTML = '통과';
    document.getElementById('30').innerHTML = '창체';
    document.getElementById('31').innerHTML = '과탐';
    document.getElementById('32').innerHTML = '통과';
    document.getElementById('33').innerHTML = '수학';
    document.getElementById('34').innerHTML = '한국';
  }

  if (grade=="103") {
    document.getElementById('1').innerHTML = '통사';
    document.getElementById('2').innerHTML = '통사';
    document.getElementById('3').innerHTML = '정보';
    document.getElementById('4').innerHTML = '국어';
    document.getElementById('5').innerHTML = '진로';
    document.getElementById('6').innerHTML = '정보';
    document.getElementById('7').innerHTML = '영어';
    document.getElementById('8').innerHTML = '국어';
    document.getElementById('9').innerHTML = '통사';
    document.getElementById('10').innerHTML = '통과';
    document.getElementById('11').innerHTML = '체육';
    document.getElementById('12').innerHTML = '한국';
    document.getElementById('13').innerHTML = '통사';
    document.getElementById('14').innerHTML = '통과';
    document.getElementById('15').innerHTML = '수학';
    document.getElementById('16').innerHTML = '영어';
    document.getElementById('17').innerHTML = '국어';
    document.getElementById('18').innerHTML = '통과';
    document.getElementById('19').innerHTML = '한국';
    document.getElementById('20').innerHTML = '창체';
    document.getElementById('21').innerHTML = '통과';
    document.getElementById('22').innerHTML = '과탐';
    document.getElementById('23').innerHTML = '수학';
    document.getElementById('24').innerHTML = '영어';
    document.getElementById('25').innerHTML = '창체';
    document.getElementById('26').innerHTML = '국어';
    document.getElementById('27').innerHTML = '음연';
    document.getElementById('28').innerHTML = '한국';
    document.getElementById('29').innerHTML = '수학';
    document.getElementById('30').innerHTML = '창체';
    document.getElementById('31').innerHTML = '음연';
    document.getElementById('32').innerHTML = '수학';
    document.getElementById('33').innerHTML = '영어';
    document.getElementById('34').innerHTML = '체육';
  }

  if (grade=="104") {
    document.getElementById('1').innerHTML = '체육';
    document.getElementById('2').innerHTML = '정보';
    document.getElementById('3').innerHTML = '한국';
    document.getElementById('4').innerHTML = '음연';
    document.getElementById('5').innerHTML = '한국';
    document.getElementById('6').innerHTML = '과탐';
    document.getElementById('7').innerHTML = '국어';
    document.getElementById('8').innerHTML = '수학';
    document.getElementById('9').innerHTML = '국어';
    document.getElementById('10').innerHTML = '통사';
    document.getElementById('11').innerHTML = '음연';
    document.getElementById('12').innerHTML = '수학';
    document.getElementById('13').innerHTML = '국어';
    document.getElementById('14').innerHTML = '통사';
    document.getElementById('15').innerHTML = '통과';
    document.getElementById('16').innerHTML = '수학';
    document.getElementById('17').innerHTML = '영어';
    document.getElementById('18').innerHTML = '영어';
    document.getElementById('19').innerHTML = '체육';
    document.getElementById('20').innerHTML = '창체';
    document.getElementById('21').innerHTML = '통사';
    document.getElementById('22').innerHTML = '한국';
    document.getElementById('23').innerHTML = '통사';
    document.getElementById('24').innerHTML = '통과';
    document.getElementById('25').innerHTML = '창체';
    document.getElementById('26').innerHTML = '영어';
    document.getElementById('27').innerHTML = '통과';
    document.getElementById('28').innerHTML = '통과';
    document.getElementById('29').innerHTML = '영어';
    document.getElementById('30').innerHTML = '창체';
    document.getElementById('31').innerHTML = '국어';
    document.getElementById('32').innerHTML = '진로';
    document.getElementById('33').innerHTML = '정보';
    document.getElementById('34').innerHTML = '수학';
  }

  if (grade=="105") {
    document.getElementById('1').innerHTML = '통사';
    document.getElementById('2').innerHTML = '국어';
    document.getElementById('3').innerHTML = '영어';
    document.getElementById('4').innerHTML = '통사';
    document.getElementById('5').innerHTML = '체육';
    document.getElementById('6').innerHTML = '한국';
    document.getElementById('7').innerHTML = '통과';
    document.getElementById('8').innerHTML = '수학';
    document.getElementById('9').innerHTML = '통과';
    document.getElementById('10').innerHTML = '영어';
    document.getElementById('11').innerHTML = '과탐';
    document.getElementById('12').innerHTML = '한국';
    document.getElementById('13').innerHTML = '통과';
    document.getElementById('14').innerHTML = '수학';
    document.getElementById('15').innerHTML = '통과';
    document.getElementById('16').innerHTML = '국어';
    document.getElementById('17').innerHTML = '음연';
    document.getElementById('18').innerHTML = '체육';
    document.getElementById('19').innerHTML = '한국';
    document.getElementById('20').innerHTML = '창체';
    document.getElementById('21').innerHTML = '진로';
    document.getElementById('22').innerHTML = '통사';
    document.getElementById('23').innerHTML = '음연';
    document.getElementById('24').innerHTML = '정보';
    document.getElementById('25').innerHTML = '창체';
    document.getElementById('26').innerHTML = '영어';
    document.getElementById('27').innerHTML = '수학';
    document.getElementById('28').innerHTML = '통사';
    document.getElementById('29').innerHTML = '국어';
    document.getElementById('30').innerHTML = '창체';
    document.getElementById('31').innerHTML = '수학';
    document.getElementById('32').innerHTML = '정보';
    document.getElementById('33').innerHTML = '국어';
    document.getElementById('34').innerHTML = '영어';
  }

  if (grade=="106") {
    document.getElementById('1').innerHTML = '진로';
    document.getElementById('2').innerHTML = '수학';
    document.getElementById('3').innerHTML = '통과';
    document.getElementById('4').innerHTML = '한국';
    document.getElementById('5').innerHTML = '통과';
    document.getElementById('6').innerHTML = '국어';
    document.getElementById('7').innerHTML = '한국';
    document.getElementById('8').innerHTML = '국어';
    document.getElementById('9').innerHTML = '정보';
    document.getElementById('10').innerHTML = '음연';
    document.getElementById('11').innerHTML = '영어';
    document.getElementById('12').innerHTML = '체육';
    document.getElementById('13').innerHTML = '음연';
    document.getElementById('14').innerHTML = '국어';
    document.getElementById('15').innerHTML = '통사';
    document.getElementById('16').innerHTML = '과탐';
    document.getElementById('17').innerHTML = '통과';
    document.getElementById('18').innerHTML = '통사';
    document.getElementById('19').innerHTML = '영어';
    document.getElementById('20').innerHTML = '창체';
    document.getElementById('21').innerHTML = '수학';
    document.getElementById('22').innerHTML = '영어';
    document.getElementById('23').innerHTML = '수학';
    document.getElementById('24').innerHTML = '통과';
    document.getElementById('25').innerHTML = '창체';
    document.getElementById('26').innerHTML = '한국';
    document.getElementById('27').innerHTML = '통사';
    document.getElementById('28').innerHTML = '정보';
    document.getElementById('29').innerHTML = '체육';
    document.getElementById('30').innerHTML = '창체';
    document.getElementById('31').innerHTML = '통사';
    document.getElementById('32').innerHTML = '국어';
    document.getElementById('33').innerHTML = '영어';
    document.getElementById('34').innerHTML = '수학';
  }

  if (grade=="107") {
    document.getElementById('1').innerHTML = '통과';
    document.getElementById('2').innerHTML = '수학';
    document.getElementById('3').innerHTML = '체육';
    document.getElementById('4').innerHTML = '정보';
    document.getElementById('5').innerHTML = '영어';
    document.getElementById('6').innerHTML = '통사';
    document.getElementById('7').innerHTML = '체육';
    document.getElementById('8').innerHTML = '수학';
    document.getElementById('9').innerHTML = '통사';
    document.getElementById('10').innerHTML = '통과';
    document.getElementById('11').innerHTML = '수학';
    document.getElementById('12').innerHTML = '통사';
    document.getElementById('13').innerHTML = '한국';
    document.getElementById('14').innerHTML = '수학';
    document.getElementById('15').innerHTML = '한국';
    document.getElementById('16').innerHTML = '한국';
    document.getElementById('17').innerHTML = '국어';
    document.getElementById('18').innerHTML = '국어';
    document.getElementById('19').innerHTML = '진로';
    document.getElementById('20').innerHTML = '창체';
    document.getElementById('21').innerHTML = '영어';
    document.getElementById('22').innerHTML = '미창';
    document.getElementById('23').innerHTML = '영어';
    document.getElementById('24').innerHTML = '국어';
    document.getElementById('25').innerHTML = '창체';
    document.getElementById('26').innerHTML = '국어';
    document.getElementById('27').innerHTML = '미창';
    document.getElementById('28').innerHTML = '과탐';
    document.getElementById('29').innerHTML = '영어';
    document.getElementById('30').innerHTML = '창체';
    document.getElementById('31').innerHTML = '정보';
    document.getElementById('32').innerHTML = '통과';
    document.getElementById('33').innerHTML = '통사';
    document.getElementById('34').innerHTML = '통과';
  }

  if (grade=="108") {
    document.getElementById('1').innerHTML = '국어';
    document.getElementById('2').innerHTML = '정보';
    document.getElementById('3').innerHTML = '국어';
    document.getElementById('4').innerHTML = '영어';
    document.getElementById('5').innerHTML = '통사';
    document.getElementById('6').innerHTML = '영어';
    document.getElementById('7').innerHTML = '통사';
    document.getElementById('8').innerHTML = '통사';
    document.getElementById('9').innerHTML = '국어';
    document.getElementById('10').innerHTML = '수학';
    document.getElementById('11').innerHTML = '한국';
    document.getElementById('12').innerHTML = '통과';
    document.getElementById('13').innerHTML = '영어';
    document.getElementById('14').innerHTML = '한국';
    document.getElementById('15').innerHTML = '통과';
    document.getElementById('16').innerHTML = '통과';
    document.getElementById('17').innerHTML = '수학';
    document.getElementById('18').innerHTML = '진로';
    document.getElementById('19').innerHTML = '정보';
    document.getElementById('20').innerHTML = '창체';
    document.getElementById('21').innerHTML = '통사';
    document.getElementById('22').innerHTML = '국어';
    document.getElementById('23').innerHTML = '체육';
    document.getElementById('24').innerHTML = '미창';
    document.getElementById('25').innerHTML = '창체';
    document.getElementById('26').innerHTML = '수학';
    document.getElementById('27').innerHTML = '영어';
    document.getElementById('28').innerHTML = '수학';
    document.getElementById('29').innerHTML = '미창';
    document.getElementById('30').innerHTML = '창체';
    document.getElementById('31').innerHTML = '체육';
    document.getElementById('32').innerHTML = '한국';
    document.getElementById('33').innerHTML = '통과';
    document.getElementById('34').innerHTML = '과탐';
  }

  if (grade=="109") {
    document.getElementById('1').innerHTML = '한국';
    document.getElementById('2').innerHTML = '국어';
    document.getElementById('3').innerHTML = '진로';
    document.getElementById('4').innerHTML = '과탐';
    document.getElementById('5').innerHTML = '통사';
    document.getElementById('6').innerHTML = '수학';
    document.getElementById('7').innerHTML = '통사';
    document.getElementById('8').innerHTML = '한국';
    document.getElementById('9').innerHTML = '통과';
    document.getElementById('10').innerHTML = '체육';
    document.getElementById('11').innerHTML = '통사';
    document.getElementById('12').innerHTML = '한국';
    document.getElementById('13').innerHTML = '국어';
    document.getElementById('14').innerHTML = '영어';
    document.getElementById('15').innerHTML = '수학';
    document.getElementById('16').innerHTML = '영어';
    document.getElementById('17').innerHTML = '수학';
    document.getElementById('18').innerHTML = '영어';
    document.getElementById('19').innerHTML = '국어';
    document.getElementById('20').innerHTML = '창체';
    document.getElementById('21').innerHTML = '정보';
    document.getElementById('22').innerHTML = '통과';
    document.getElementById('23').innerHTML = '통과';
    document.getElementById('24').innerHTML = '수학';
    document.getElementById('25').innerHTML = '창체';
    document.getElementById('26').innerHTML = '통과';
    document.getElementById('27').innerHTML = '영어';
    document.getElementById('28').innerHTML = '미창';
    document.getElementById('29').innerHTML = '정보';
    document.getElementById('30').innerHTML = '창체';
    document.getElementById('31').innerHTML = '국어';
    document.getElementById('32').innerHTML = '체육';
    document.getElementById('33').innerHTML = '미창';
    document.getElementById('34').innerHTML = '통사';
  }

  if (grade=="110") {
    document.getElementById('1').innerHTML = '통과';
    document.getElementById('2').innerHTML = '통과';
    document.getElementById('3').innerHTML = '통사';
    document.getElementById('4').innerHTML = '수학';
    document.getElementById('5').innerHTML = '수학';
    document.getElementById('6').innerHTML = '국어';
    document.getElementById('7').innerHTML = '국어';
    document.getElementById('8').innerHTML = '국어';
    document.getElementById('9').innerHTML = '진로';
    document.getElementById('10').innerHTML = '통과';
    document.getElementById('11').innerHTML = '수학';
    document.getElementById('12').innerHTML = '영어';
    document.getElementById('13').innerHTML = '체육';
    document.getElementById('14').innerHTML = '통사';
    document.getElementById('15').innerHTML = '영어';
    document.getElementById('16').innerHTML = '한국';
    document.getElementById('17').innerHTML = '체육';
    document.getElementById('18').innerHTML = '통과';
    document.getElementById('19').innerHTML = '과탐';
    document.getElementById('20').innerHTML = '창체';
    document.getElementById('21').innerHTML = '미창';
    document.getElementById('22').innerHTML = '통사';
    document.getElementById('23').innerHTML = '영어';
    document.getElementById('24').innerHTML = '영어';
    document.getElementById('25').innerHTML = '창체';
    document.getElementById('26').innerHTML = '미창';
    document.getElementById('27').innerHTML = '정보';
    document.getElementById('28').innerHTML = '수학';
    document.getElementById('29').innerHTML = '한국';
    document.getElementById('30').innerHTML = '창체';
    document.getElementById('31').innerHTML = '통사';
    document.getElementById('32').innerHTML = '한국';
    document.getElementById('33').innerHTML = '정보';
    document.getElementById('34').innerHTML = '국어';
  }

  if (grade=="111") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="112") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="201") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="202") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="203") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="204") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="205") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="206") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="208") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="209") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="210") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="211") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="212") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="213") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="301") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="302") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="303") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="304") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="305") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="306") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="307") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="308") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="309") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="310") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="311") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="312") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }

  if (grade=="313") {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    document.getElementById('10').innerHTML = '';
    document.getElementById('11').innerHTML = '';
    document.getElementById('12').innerHTML = '';
    document.getElementById('13').innerHTML = '';
    document.getElementById('14').innerHTML = '';
    document.getElementById('15').innerHTML = '';
    document.getElementById('16').innerHTML = '';
    document.getElementById('17').innerHTML = '';
    document.getElementById('18').innerHTML = '';
    document.getElementById('19').innerHTML = '';
    document.getElementById('20').innerHTML = '';
    document.getElementById('21').innerHTML = '';
    document.getElementById('22').innerHTML = '';
    document.getElementById('23').innerHTML = '';
    document.getElementById('24').innerHTML = '';
    document.getElementById('25').innerHTML = '';
    document.getElementById('26').innerHTML = '';
    document.getElementById('27').innerHTML = '';
    document.getElementById('28').innerHTML = '';
    document.getElementById('29').innerHTML = '';
    document.getElementById('30').innerHTML = '';
    document.getElementById('31').innerHTML = '';
    document.getElementById('32').innerHTML = '';
    document.getElementById('33').innerHTML = '';
    document.getElementById('34').innerHTML = '';
  }


}
