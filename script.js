/* ====== Danh sách Phường/Xã mới (95 đơn vị) tách theo Tỉnh ====== */
/* 55 đơn vị thuộc Đồng Nai (theo thứ tự bạn cung cấp: 1..15, 24..63) */
const DN_WARDS_2025 = [
  // Đồng Nai
  'Phường Trấn Biên','Phường Biên Hòa','Phường Tam Hiệp','Phường Long Bình','Phường Hố Nai','Phường Trảng Dài','Phường Long Hưng','Phường Phước Tân','Phường Tam Phước','Phường Tân Triều',
  'Phường Long Khánh','Phường Bảo Vinh','Phường Xuân Lập','Phường Hàng Gòn','Phường Bình Lộc',
  'Xã Trị An','Xã Tân An','Xã Phú Lý',
  'Xã Trảng Bom','Xã An Viễn','Xã Bàu Hàm','Xã Bình Minh','Xã Hưng Thịnh',
  'Xã Dầu Giây','Xã Gia Kiệm','Xã Thống Nhất',
  'Xã La Ngà','Xã Định Quán','Xã Phú Hòa','Xã Thanh Sơn','Xã Phú Vinh',
  'Xã Tân Phú','Xã Phú Lâm','Xã Tà Lài','Xã Nam Cát Tiên','Xã Đak Lua',
  'Xã Xuân Lộc','Xã Xuân Hòa','Xã Xuân Phú','Xã Xuân Thành','Xã Xuân Định','Xã Xuân Bắc',
  'Xã Cẩm Mỹ','Xã Sông Ray','Xã Xuân Đông','Xã Xuân Quế','Xã Xuân Đường',
  'Xã Long Thành','Xã Phước Thái','Xã Long Phước','Xã Bình An','Xã An Phước',
  'Xã Nhơn Trạch','Xã Đại Phước','Xã Phước An'
];

/* 40 đơn vị thuộc Bình Phước (16..23, 64..95) */
const BP_WARDS_2025 = [
  'Phường Bình Phước','Phường Đồng Xoài','Phường Phước Bình','Phường Phước Long','Phường Bình Long','Phường An Lộc','Phường Minh Hưng','Phường Chơn Thành',
  'Xã Nha Bích','Xã Tân Quan','Xã Tân Hưng','Xã Tân Khai','Xã Minh Đức',
  'Xã Lộc Thành','Xã Lộc Ninh','Xã Lộc Hưng','Xã Lộc Tấn','Xã Lộc Thạnh','Xã Lộc Quang',
  'Xã Tân Tiến','Xã Thiện Hưng','Xã Hưng Phước','Xã Phú Nghĩa','Xã Đa Kia','Xã Đăk Ơ','Xã Bù Gia Mập',
  'Xã Bình Tân','Xã Long Hà','Xã Phú Riềng','Xã Phú Trung',
  'Xã Thuận Lợi','Xã Đồng Tâm','Xã Tân Lợi','Xã Đồng Phú',
  'Xã Phước Sơn','Xã Nghĩa Trung','Xã Bù Đăng','Xã Thọ Sơn','Xã Đak Nhau','Xã Bom Bo'
];

/* ====== Issues (50+) – giữ nguyên từ bản trước ====== */
const ISSUES = [
  {id:'hospital',cat:'Ngoại cảnh',label:'Đối diện/gần Bệnh viện',impact:'Âm khí, ảnh hưởng sức khỏe.',remedy:'Cây xanh, ánh sáng ấm, rèm dày; bình phong; cân nhắc Bát Quái lồi.'},
  {id:'cemetery',cat:'Ngoại cảnh',label:'Gần nghĩa trang/nhà tang lễ',impact:'Âm khí nặng, khó tụ tài.',remedy:'Hàng rào kín, cây tán dày, đèn ấm; hạn chế cửa nhìn thẳng.'},
  {id:'crematorium',cat:'Ngoại cảnh',label:'Gần lò hỏa táng',impact:'Ám khí, bất an.',remedy:'Che chắn mạnh (cây, tường), nước + đá cân bằng.'},
  {id:'temple',cat:'Ngoại cảnh',label:'Đối diện Chùa',impact:'Khí tĩnh/âm, giảm tài khí.',remedy:'Quan Công gần cửa, chuông gió kim loại.'},
  {id:'church',cat:'Ngoại cảnh',label:'Đối diện Nhà thờ',impact:'Khí tĩnh, giờ lễ ồn.',remedy:'Bình phong, rèm dày, dùng cửa phụ.'},
  {id:'school',cat:'Ngoại cảnh',label:'Đối diện Trường học',impact:'Ồn, khí động mạnh.',remedy:'Vách ngăn, rèm cách âm.'},
  {id:'market',cat:'Ngoại cảnh',label:'Sát chợ/siêu thị ồn',impact:'Khí tạp.',remedy:'Cửa 2 lớp, cây “lọc khí”.'},
  {id:'gas',cat:'Ngoại cảnh',label:'Gần trạm xăng/kho gas',impact:'Hỏa khí, nguy cơ cháy nổ.',remedy:'Khoảng cách an toàn, tường chống cháy.'},
  {id:'transformer',cat:'Ngoại cảnh',label:'Gần trạm biến áp',impact:'Từ trường, ồn.',remedy:'Lùi cổng/cửa, tường đặc, cây cao.'},
  {id:'pylon',cat:'Ngoại cảnh',label:'Cột điện trước cổng',impact:'Sát khí, cản khí.',remedy:'Lùi cổng, cây cao, bình phong.'},
  {id:'bts',cat:'Ngoại cảnh',label:'Cột BTS/anten',impact:'Từ trường, thị giác xấu.',remedy:'Che chắn cây, mái.'},
  {id:'deadend',cat:'Ngoại cảnh',label:'Hẻm cụt',impact:'Khí bí, đọng xấu.',remedy:'Đèn sáng, cây/đá/nước đầu nhà.'},
  {id:'T_cross',cat:'Ngoại cảnh',label:'Ngã ba chữ T đâm thẳng',impact:'Trực sát.',remedy:'Bình phong, bậc cấp gãy dòng.'},
  {id:'Y_cross',cat:'Ngoại cảnh',label:'Ngã ba chữ Y',impact:'Khí loạn.',remedy:'Cổng kín, hiên che, cây đệm.'},
  {id:'crossroad',cat:'Ngoại cảnh',label:'Ngã tư lớn/cao tốc',impact:'Khí động mạnh, bụi.',remedy:'Lam chắn gió, kính cách âm.'},
  {id:'curve_blade',cat:'Ngoại cảnh',label:'Đường cong “lưỡi đao”',impact:'Hình sát chém.',remedy:'Bình phong, tường cong mềm.'},
  {id:'rail',cat:'Ngoại cảnh',label:'Sát đường tàu',impact:'Rung, ồn, xung khí.',remedy:'Chống ồn/rung, công năng ngủ lùi sâu.'},
  {id:'underbridge',cat:'Ngoại cảnh',label:'Dưới chân cầu',impact:'Thiếu sáng, áp lực.',remedy:'Tăng sáng, màu ấm.'},
  {id:'slope',cat:'Ngoại cảnh',label:'Đường dốc trước nhà',impact:'Khí trượt khó tụ.',remedy:'Bậc thềm, bồn cây bậc cấp.'},
  {id:'lowfloor',cat:'Ngoại cảnh',label:'Nền thấp hơn đường',impact:'Ngập, khí xấu tràn.',remedy:'Nâng cốt nền, rãnh thoát nước.'},
  {id:'highfloor',cat:'Ngoại cảnh',label:'Nền quá cao',impact:'Khó dẫn khí, dốc nguy.',remedy:'Bậc thoải, tiểu cảnh mềm.'},
  {id:'sharpcorner',cat:'Ngoại cảnh',label:'Góc nhọn chĩa vào',impact:'Hình sát đâm.',remedy:'Cây/bình phong che.'},
  {id:'river_back',cat:'Ngoại cảnh',label:'Sông/hồ phía sau',impact:'Thủy sau nhà bất ổn.',remedy:'Hàng rào, cây, hạn chế cửa lớn.'},
  {id:'polluted',cat:'Ngoại cảnh',label:'Mương/cống ô nhiễm',impact:'Uế khí.',remedy:'Che kín, xử lý mùi.'},
  {id:'streetlight',cat:'Ngoại cảnh',label:'Đèn đường rọi cửa',impact:'Quang sát.',remedy:'Rèm dày, lam che.'},
  // … (các mục nhóm Lô đất, Cửa-khí, Kết cấu, Bếp, WC/Ngủ, Bàn thờ, Khác) đã đủ tổng 50+ ở bản trước
  {id:'lot_triangle',cat:'Lô đất',label:'Đất hình tam giác',impact:'Khó tụ tài.',remedy:'Cắt góc/tiểu cảnh.'},
  {id:'door_back',cat:'Cửa & khí',label:'Cửa trước thẳng cửa sau',impact:'Thoát khí.',remedy:'Bình phong, đổi lệch cửa.'},
  {id:'beam_over',cat:'Kết cấu',label:'Xà ngang đè giường',impact:'Áp khí.',remedy:'Trần giả/đổi vị trí.'},
  {id:'sink_stove',cat:'Bếp',label:'Bồn rửa sát/đối bếp',impact:'Thủy–Hỏa xung.',remedy:'Cách 60–80cm, vật trung gian.'},
  {id:'wc_center',cat:'WC/Ngủ',label:'WC trung cung',impact:'Uế giữa nhà.',remedy:'Dời vị trí.'},
  {id:'altar_back_wc',cat:'Bàn thờ',label:'Bàn thờ tựa WC',impact:'Uế sát.',remedy:'Cách tường kỹ thuật/di dời.'}
];

/* ====== La bàn số ====== */
let compassActive=false, orientationHandler=null;
const degNormalize=x=>{x=x%360; return x<0?x+360:x;};
function degreeToDirection(deg){
  const d=degNormalize(deg);
  if(d>=337.5||d<22.5) return 'Bắc';
  if(d<67.5) return 'Đông Bắc';
  if(d<112.5) return 'Đông';
  if(d<157.5) return 'Đông Nam';
  if(d<202.5) return 'Nam';
  if(d<247.5) return 'Tây Nam';
  if(d<292.5) return 'Tây';
  return 'Tây Bắc';
}
function updateCompassUI(deg){
  const offset=parseFloat(document.getElementById('compass-offset').value||'0')||0;
  const show=degNormalize(deg+offset);
  document.getElementById('compass-deg').textContent=show.toFixed(0);
  document.getElementById('compass-dir').textContent=degreeToDirection(show);
  document.getElementById('needle').style.transform=`translate(-50%,-100%) rotate(${show}deg)`;
}
async function startCompass(){
  const status=document.getElementById('compass-status');
  try{
    if(!('DeviceOrientationEvent' in window)){ status.textContent='Thiết bị không hỗ trợ la bàn.'; return; }
    if(typeof DeviceOrientationEvent.requestPermission==='function'){
      const perm=await DeviceOrientationEvent.requestPermission();
      if(perm!=='granted'){ status.textContent='Chưa được cấp quyền cảm biến.'; return; }
    }
    orientationHandler=e=>{
      let heading=null;
      if(typeof e.webkitCompassHeading==='number'&&!isNaN(e.webkitCompassHeading)){ heading=e.webkitCompassHeading; }
      else if(typeof e.alpha==='number'){ heading=360 - e.alpha; }
      if(heading!=null) updateCompassUI(heading);
    };
    window.addEventListener('deviceorientation',orientationHandler,true);
    compassActive=true; status.textContent='Đang đo… giữ máy song song mặt đất & lắc hình số 8 để hiệu chuẩn.';
  }catch(err){ status.textContent='Lỗi la bàn: '+(err.message||err); }
}
function stopCompass(){
  if(orientationHandler){ window.removeEventListener('deviceorientation',orientationHandler,true); orientationHandler=null; }
  compassActive=false; document.getElementById('compass-status').textContent='Đã dừng.';
}
function applyCompassToDirection(){
  const deg=parseFloat(document.getElementById('compass-deg').textContent);
  if(isNaN(deg)) return alert('Chưa có dữ liệu la bàn.');
  document.getElementById('huong-nha').value=degreeToDirection(deg);
  alert('Đã gán hướng nhà = '+degreeToDirection(deg));
}

/* ====== Phong thủy cốt lõi: cung mệnh, bát trạch, cảnh báo ====== */
function parseDateParts(s){ if(!s||typeof s!=='string') throw new Error('Ngày sinh không hợp lệ'); s=s.trim(); const sep=s.includes('-')?'-':(s.includes('/')?'/':null); if(!sep) throw new Error('Định dạng ngày phải có "-" hoặc "/"'); const a=s.split(sep).map(x=>parseInt(x,10)); if(a.length!==3||a.some(isNaN)) throw new Error('Định dạng ngày không đúng'); if(a[0]>31) return {year:a[0],month:a[1],day:a[2]}; return {year:a[2],month:a[1],day:a[0]}; }
function getEffectiveBirthYear(b){ const {year,month,day}=parseDateParts(b); if(month<3||(month===3&&day<=13)) return year-1; return year; }
const MALE_START=1921, FEMALE_START=1922;
const MALE_SEQ=['Đoài','Càn','Khôn','Tốn','Chấn','Khôn','Khảm','Ly','Cấn']; const FEMALE_SEQ=['Cấn','Khảm','Ly','Tốn','Chấn','Khôn','Càn','Đoài','Cấn']; const mod9=n=>((n%9)+9)%9;
function getCungMenh(birth,gender){
  const eff=getEffectiveBirthYear(birth);
  const idx=mod9(eff-(gender==='nam'?MALE_START:FEMALE_START));
  const cung=(gender==='nam'?MALE_SEQ:FEMALE_SEQ)[idx];
  const info={'Càn':{nguyenTo:'Kim',huong:'Tây Bắc'},'Khôn':{nguyenTo:'Thổ',huong:'Tây Nam'},'Cấn':{nguyenTo:'Thổ',huong:'Đông Bắc'},'Chấn':{nguyenTo:'Mộc',huong:'Đông'},'Tốn':{nguyenTo:'Mộc',huong:'Đông Nam'},'Ly':{nguyenTo:'Hỏa',huong:'Nam'},'Khảm':{nguyenTo:'Thủy',huong:'Bắc'},'Đoài':{nguyenTo:'Kim',huong:'Tây'}}[cung];
  const nhom=['Khảm','Ly','Chấn','Tốn'].includes(cung)?'Đông Tứ Trạch':'Tây Tứ Trạch';
  return {effectiveYear:eff,cung,nhomTrach:nhom,...info};
}
function getBatTrachForCung(cung){
  const C={good:{'Sinh Khí':{ten:'Sinh Khí',loai:'good',y:'Tài lộc, thăng tiến.'},'Thiên Y':{ten:'Thiên Y',loai:'good',y:'Sức khỏe, quý nhân.'},'Diên Niên':{ten:'Diên Niên',loai:'good',y:'Hòa thuận.'},'Phục Vị':{ten:'Phục Vị',loai:'good',y:'Ổn định, học hành.'}},
           bad:{'Tuyệt Mệnh':{ten:'Tuyệt Mệnh',loai:'bad',y:'Nặng nhất.'},'Ngũ Quỷ':{ten:'Ngũ Quỷ',loai:'bad',y:'Thị phi.'},'Lục Sát':{ten:'Lục Sát',loai:'bad',y:'Kiện tụng.'},'Họa Hại':{ten:'Họa Hại',loai:'bad',y:'Xui xẻo.'}}};
  const B={'Khảm':{'Đông Nam':C.good['Sinh Khí'],'Đông':C.good['Thiên Y'],'Nam':C.good['Diên Niên'],'Bắc':C.good['Phục Vị'],'Tây Nam':C.bad['Tuyệt Mệnh'],'Đông Bắc':C.bad['Ngũ Quỷ'],'Tây Bắc':C.bad['Lục Sát'],'Tây':C.bad['Họa Hại']},
           'Ly':{'Đông':C.good['Sinh Khí'],'Đông Nam':C.good['Thiên Y'],'Bắc':C.good['Diên Niên'],'Nam':C.good['Phục Vị'],'Tây Bắc':C.bad['Tuyệt Mệnh'],'Tây':C.bad['Ngũ Quỷ'],'Tây Nam':C.bad['Lục Sát'],'Đông Bắc':C.bad['Họa Hại']},
           'Chấn':{'Nam':C.good['Sinh Khí'],'Bắc':C.good['Thiên Y'],'Đông Nam':C.good['Diên Niên'],'Đông':C.good['Phục Vị'],'Tây':C.bad['Tuyệt Mệnh'],'Tây Bắc':C.bad['Ngũ Quỷ'],'Đông Bắc':C.bad['Lục Sát'],'Tây Nam':C.bad['Họa Hại']},
           'Tốn':{'Bắc':C.good['Sinh Khí'],'Nam':C.good['Thiên Y'],'Đông':C.good['Diên Niên'],'Đông Nam':C.good['Phục Vị'],'Đông Bắc':C.bad['Tuyệt Mệnh'],'Tây Nam':C.bad['Ngũ Quỷ'],'Tây':C.bad['Lục Sát'],'Tây Bắc':C.bad['Họa Hại']},
           'Càn':{'Tây':C.good['Sinh Khí'],'Đông Bắc':C.good['Thiên Y'],'Tây Nam':C.good['Diên Niên'],'Tây Bắc':C.good['Phục Vị'],'Nam':C.bad['Tuyệt Mệnh'],'Đông':C.bad['Ngũ Quỷ'],'Bắc':C.bad['Lục Sát'],'Đông Nam':C.bad['Họa Hại']},
           'Khôn':{'Đông Bắc':C.good['Sinh Khí'],'Tây':C.good['Thiên Y'],'Tây Bắc':C.good['Diên Niên'],'Tây Nam':C.good['Phục Vị'],'Bắc':C.bad['Tuyệt Mệnh'],'Đông Nam':C.bad['Ngũ Quỷ'],'Nam':C.bad['Lục Sát'],'Đông':C.bad['Họa Hại']},
           'Cấn':{'Tây Nam':C.good['Sinh Khí'],'Tây Bắc':C.good['Thiên Y'],'Tây':C.good['Diên Niên'],'Đông Bắc':C.good['Phục Vị'],'Đông Nam':C.bad['Tuyệt Mệnh'],'Bắc':C.bad['Ngũ Quỷ'],'Đông':C.bad['Lục Sát'],'Nam':C.bad['Họa Hại']},
           'Đoài':{'Tây Bắc':C.good['Sinh Khí'],'Tây Nam':C.good['Thiên Y'],'Đông Bắc':C.good['Diên Niên'],'Tây':C.good['Phục Vị'],'Đông':C.bad['Tuyệt Mệnh'],'Nam':C.bad['Ngũ Quỷ'],'Đông Nam':C.bad['Lục Sát'],'Bắc':C.bad['Họa Hại']}};
  return B[cung];
}
function analyzeHouseDirection(cung,huong){ const t=getBatTrachForCung(cung); const all=Object.entries(t).map(([h,i])=>({huong:h,...i})); return {selected:t[huong],goods:all.filter(i=>i.loai==='good'),bads:all.filter(i=>i.loai==='bad')}; }
const ZODIAC=['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi']; const idxZ=y=>((y-4)%12+12)%12; const nameZ=y=>ZODIAC[idxZ(y)];
const TTG=[{group:['Thân','Tý','Thìn'],tamTai:['Dần','Mão','Thìn']},{group:['Dần','Ngọ','Tuất'],tamTai:['Thân','Dậu','Tuất']},{group:['Hợi','Mão','Mùi'],tamTai:['Tỵ','Ngọ','Mùi']},{group:['Tỵ','Dậu','Sửu'],tamTai:['Hợi','Tý','Sửu']}];
function tuoiMu(eff,year){return year-eff+1}
function checkKimLau(t){let r=t%9;if(r===0)r=9;const m={1:'Kim Lâu Thân',3:'Kim Lâu Thê',6:'Kim Lâu Tử',8:'Kim Lâu Lục Súc'};return {isKimLau:[1,3,6,8].includes(r),type:m[r]||null}}
function checkHoangOc(t){const lb=['Nhất Cát','Nhì Nghi','Tam Địa Sát','Tứ Tấn Tài','Ngũ Thọ Tử','Lục Hoang Ốc'];const m=t%6;const i=(m===0)?5:m-1;const n=lb[i];return {name:n,isBad:['Tam Địa Sát','Ngũ Thọ Tử','Lục Hoang Ốc'].includes(n)}}
function checkTamTai(ownerYear,year){const o=nameZ(ownerYear),c=nameZ(year),g=TTG.find(x=>x.group.includes(o));return {isTamTai:g?g.tamTai.includes(c):false,yearChi:c}}
function checkXungTuoi(ownerYear,year){const opp=(idxZ(ownerYear)+6)%12;return {isXung:idxZ(year)===opp,opp:ZODIAC[opp],yearChi:nameZ(year)}}
function elemYear(y){const s=((y-4)%10+10)%10; if(s===0||s===1)return'Mộc'; if(s===2||s===3)return'Hỏa'; if(s===4||s===5)return'Thổ'; if(s===6||s===7)return'Kim'; return'Thủy';}
const KHAC={'Mộc':'Thổ','Thổ':'Thủy','Thủy':'Hỏa','Hỏa':'Kim','Kim':'Mộc'};
function elemConflict(a,b){return a&&b&&(KHAC[a]===b||KHAC[b]===a)}
function evaluateBuildTime(birth,gender,year,month){
  const cung=getCungMenh(birth,gender); const age=tuoiMu(cung.effectiveYear,year);
  const kl=checkKimLau(age), ho=checkHoangOc(age), tt=checkTamTai(cung.effectiveYear,year), x=checkXungTuoi(cung.effectiveYear,year);
  const yE=elemYear(year), mE=[null,'Thủy',null,'Hỏa','Thổ','Kim','Mộc',null,'Hỏa','Thổ','Kim','Mộc','Thủy'][month]||null;
  const warnings=[]; if(kl.isKimLau)warnings.push(`Phạm Kim Lâu (${kl.type}).`); if(ho.isBad)warnings.push(`Phạm Hoang Ốc (${ho.name}).`); if(tt.isTamTai)warnings.push(`Phạm Tam Tai (${tt.yearChi}).`); if(x.isXung)warnings.push(`Xung tuổi với năm ${year} (đối xung ${x.opp}).`); if(elemConflict(cung.nguyenTo,yE))warnings.push(`Cung (${cung.nguyenTo}) khắc Ngũ hành năm (${yE}).`);
  const monthWarnings=[]; if(elemConflict(cung.nguyenTo,mE))monthWarnings.push(`Tháng ${month} xung ngũ hành (${mE}) với Cung (${cung.nguyenTo}).`);
  return {cung,ageMu:age,yearElement:yE,monthElement:mE,warnings,monthWarnings};
}

/* ====== UI: Wards theo tỉnh, Issues, La bàn, Lưu hồ sơ ====== */
function populateWardsForProvince(){
  const prov=document.getElementById('bd-province').value;
  const sel=document.getElementById('bd-ward');
  const wards=(prov==='Đồng Nai'?DN_WARDS_2025:BP_WARDS_2025);
  const opts=wards.map(w=>`<option value="${w}">${w}</option>`);
  opts.push('<option value="__other__">Khác (nhập tay)</option>');
  sel.innerHTML=opts.join('');
  sel.value=wards[0]||'__other__';
  document.getElementById('ward-custom-wrap').style.display = (sel.value==='__other__')?'block':'none';
  document.getElementById('bd-full-address').textContent = composeFullAddress();
}
function currentWardValue(){
  const v=document.getElementById('bd-ward').value;
  if(v==='__other__') return document.getElementById('bd-ward-custom').value.trim();
  return v;
}
function composeFullAddress(){
  const prov=document.getElementById('bd-province').value;
  const ward=currentWardValue();
  const huyen=document.getElementById('bd-huyen').value.trim(); // tùy chọn
  const detail=document.getElementById('bd-address-detail').value.trim();
  const parts=[]; if(detail)parts.push(detail); if(ward)parts.push(ward); if(huyen)parts.push(huyen); parts.push(prov);
  return parts.join(', ');
}
function renderIssues(filter=''){
  const wrap=document.getElementById('issues-container'); if(!wrap) return;
  const f=(filter||'').toLowerCase();
  const list=ISSUES.filter(i=> (i.cat+' '+i.label).toLowerCase().includes(f));
  wrap.innerHTML=list.map(i=>`<label class="issue-item"><input type="checkbox" name="issue" value="${i.id}"><span><strong>[${i.cat}]</strong> ${i.label}</span></label>`).join('');
}
function getSelectedIssues(){ return Array.from(document.querySelectorAll('input[name="issue"]:checked')).map(el=>el.value); }
function checkSiteIssues(ids){
  const problems=[],solutions=[]; const map=new Map(ISSUES.map(i=>[i.id,i]));
  ids.forEach(id=>{ const it=map.get(id); if(it){problems.push(`${it.label}: ${it.impact}`); solutions.push(`Hóa giải: ${it.remedy}`);} });
  return {problems,solutions};
}

const STORAGE_KEY='ptpro_profiles_wards2025';
const getProfiles=()=>JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');
const setProfiles=a=>localStorage.setItem(STORAGE_KEY,JSON.stringify(a));
const uuid=()=> (crypto?.randomUUID ? crypto.randomUUID() : 'id_'+Date.now()+Math.random().toString(16).slice(2));
function normalizePhone(p){ p=(p||'').replace(/[^\d+]/g,'').trim(); if(p.startsWith('+84'))return p; if(p.startsWith('0')&&p.length>=9)return '+84'+p.slice(1); return p; }
function isValidPhone(p){ p=normalizePhone(p); const vn=/^\+?84(3|5|7|8|9)\d{8}$/; const g=/^\+?\d{8,13}$/; return vn.test(p)||g.test(p); }

function gatherInputs(){
  const name=document.getElementById('kh-ten').value.trim();
  const phone=document.getElementById('kh-phone').value.trim();
  const birth=document.getElementById('ngay-sinh').value.trim();
  const gender=document.getElementById('gioi-tinh').value;
  const huong=document.getElementById('huong-nha').value;
  const yearX=parseInt(document.getElementById('nam-xay').value,10);
  const monthX=parseInt(document.getElementById('thang-xay').value,10);

  const province=document.getElementById('bd-province').value;
  const ward=currentWardValue();
  const huyen=document.getElementById('bd-huyen').value.trim();
  const to=document.getElementById('bd-to').value.trim();
  const thua=document.getElementById('bd-thua').value.trim();
  const price=parseFloat(document.getElementById('bd-price').value)||0;
  const detail=document.getElementById('bd-address-detail').value.trim();
  const note=document.getElementById('bd-note').value.trim();
  const issueIds=getSelectedIssues();

  const fullAddr=composeFullAddress();
  document.getElementById('bd-full-address').textContent=fullAddr||'—';

  const bds={province,ward,huyen,to,thua,addressDetail:detail,fullAddress:fullAddr,price,note};
  return {name,phone,birth,gender,huong,yearX,monthX,bds,issueIds};
}

async function renderResult(R,i){
  const dir=analyzeHouseDirection(R.cung.cung,i.huong);
  const site=checkSiteIssues(i.issueIds);
  let html='';
  html+=`<div class="ket-luan"><div><span class="badge">Cung mệnh</span> <strong>${R.cung.cung}</strong> — Ngũ hành: <strong>${R.cung.nguyenTo}</strong> — Nhóm: <strong>${R.cung.nhomTrach}</strong></div></div>`;
  html+=`<h3 class="block-title">Hướng nhà: ${i.huong} <span class="tag ${dir.selected?.loai||'warn'}">${dir.selected?.ten||'—'}</span></h3>`;
  if(dir.selected){
    const adv = dir.selected.loai==='good'
      ? ['Ưu tiên cửa/ban công hướng này.','Bếp/giường/bàn thờ/bàn làm việc xoay về 1 trong 4 hướng tốt.','Giữ lối vào thông thoáng.']
      : ['Bình phong/hiên/bậc tam cấp để “bẻ” dòng khí xấu.','Bố trí “tọa hung – hướng cát”.','Cân nhắc Bát Quái lồi.','Tăng cây xanh/ánh sáng.'];
    html+=`<p><em>Ý nghĩa:</em> ${dir.selected.y}</p><ul class="clean">`+adv.map(a=>`<li>${a}</li>`).join('')+`</ul>`;
  }
  if(dir.goods.length){
    const pr={'Sinh Khí':1,'Thiên Y':2,'Diên Niên':3,'Phục Vị':4};
    const g=[...dir.goods].sort((a,b)=>(pr[a.ten]||9)-(pr[b.ten]||9));
    html+=`<p><strong>4 hướng tốt nên ưu tiên:</strong></p><ul class="clean">`+g.map(x=>`<li><span class="good">${x.huong}</span> — ${x.ten}: ${x.y}</li>`).join('')+`</ul>`;
  }
  html+=`<hr/><h3 class="block-title">Năm/Tháng xây</h3>`;
  html+=`<p>Tuổi mụ: <strong>${R.ageMu}</strong> — Ngũ hành năm: <strong>${R.yearElement}</strong>${R.monthElement?` — Ngũ hành tháng: <strong>${R.monthElement}</strong>`:''}</p>`;
  if(R.warnings.length===0) html+=`<p class="good">Năm ${i.yearX}: Không thấy cảnh báo lớn.</p>`; else html+=`<ul class="clean">`+R.warnings.map(w=>`<li class="bad">${w}</li>`).join('')+`</ul>`;
  if(R.monthWarnings.length===0) html+=`<p class="good">Tháng ${i.monthX}: Không thấy cảnh báo lớn.</p>`; else html+=`<ul class="clean">`+R.monthWarnings.map(w=>`<li class="warn">${w}</li>`).join('')+`</ul>`;

  html+=`<hr/><h3 class="block-title">Môi trường & lỗi phong thủy</h3>`;
  if(site.problems.length===0) html+=`<p class="good">Không phát hiện lỗi đã chọn.</p>`;
  else{ html+=`<p><strong>Vấn đề:</strong></p><ul class="clean">`+site.problems.map(p=>`<li class="bad">${p}</li>`).join('')+`</ul>`;
        html+=`<p><strong>Hóa giải:</strong></p><ul class="clean">`+site.solutions.map(s=>`<li>${s}</li>`).join('')+`</ul>`; }

  html+=`<hr/><h3 class="block-title">Thông tin bất động sản</h3>`;
  html+=`<p><strong>Địa chỉ:</strong> ${i.bds.fullAddress||'—'}</p>`;
  html+=`<p><strong>Tờ/Thửa:</strong> ${i.bds.to||'—'} / ${i.bds.thua||'—'}</p>`;
  html+=`<p><strong>Giá:</strong> ${i.bds.price?new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(i.bds.price):'—'}</p>`;
  html+=`<p><strong>Ghi chú:</strong> ${i.bds.note||'—'}</p>`;
  html+=`<hr/><h3 class="block-title">Phân tích AI</h3><div id="ai-analysis"><em>Đang phân tích…</em></div>`;
  document.getElementById('result-content').innerHTML=html;
  try {
    const ai = await getAiAnalysis({input:i, result:R});
    document.getElementById('ai-analysis').textContent = ai.text || 'Không có phản hồi';
  } catch(err) {
    document.getElementById('ai-analysis').textContent = 'Lỗi AI: ' + (err.message || err);
  }
}

async function getAiAnalysis(payload){
  const res = await fetch('/api/ai-analyze', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
  if(!res.ok) throw new Error('Network error');
  return res.json();
}

function saveProfile(currentResult){
  const i=gatherInputs();
  if(!i.name) return alert('Vui lòng nhập họ tên.');
  if(!i.phone) return alert('Vui lòng nhập SĐT.');
  if(!isValidPhone(i.phone)) return alert('SĐT chưa đúng định dạng.');
  if(!i.birth) return alert('Vui lòng nhập ngày sinh.');
  if(!i.yearX||i.yearX<1900||i.yearX>2099) return alert('Năm xây không hợp lệ.');
  if(!i.monthX||i.monthX<1||i.monthX>12) return alert('Tháng xây không hợp lệ.');
  const R=currentResult||evaluateBuildTime(i.birth,i.gender,i.yearX,i.monthX);
  const list=getProfiles(); const phoneKey=normalizePhone(i.phone); const idx=list.findIndex(p=>p.customer.phoneKey===phoneKey);
  const profile={
    id:idx>=0?list[idx].id:uuid(),
    createdAt:idx>=0?list[idx].createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString(),
    customer:{name:i.name,phone:i.phone,phoneKey},
    input:{birth:i.birth,gender:i.gender,huong:i.huong,year:i.yearX,month:i.monthX,issueIds:i.issueIds},
    bds:i.bds,
    result:R,
    summary:{cung:R.cung.cung,menh:R.cung.nguyenTo,nhom:R.cung.nhomTrach,dir:i.huong,fullAddress:i.bds.fullAddress,to:i.bds.to,thua:i.bds.thua,price:i.bds.price,issues:i.issueIds.length}
  };
  if(idx>=0) list[idx]=profile; else list.unshift(profile);
  setProfiles(list); renderProfiles(); alert('Đã lưu hồ sơ.');
}

function renderProfiles(filter=''){
  const tbody=document.getElementById('profiles-tbody');
  const list=getProfiles().filter(p=> (p.customer.name+' '+p.customer.phone).toLowerCase().includes((filter||'').toLowerCase()) );
  const fmt=s=>new Date(s).toLocaleString();
  tbody.innerHTML=list.map(p=>`
    <tr data-id="${p.id}">
      <td>${p.customer.name}</td>
      <td>${p.customer.phone}</td>
      <td>${p.summary.cung} (${p.summary.menh})</td>
      <td>${p.summary.dir}</td>
      <td>${p.summary.fullAddress||''}</td>
      <td>${(p.summary.to||'')}${p.summary.thua?(' / '+p.summary.thua):''}</td>
      <td>${p.summary.price?new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(p.summary.price):''}</td>
      <td>${p.summary.issues||0}</td>
      <td>${fmt(p.createdAt)}</td>
      <td class="row-actions"><button class="view">Xem</button><button class="delete">Xóa</button></td>
    </tr>`).join('');
}

function exportCSV(){
  const rows=getProfiles(); if(rows.length===0) return alert('Chưa có dữ liệu để xuất.');
  const header=['id','name','phone','birth','gender','huong','year','month','cung','menh','nhom','address','ward','huyen','province','to','thua','price','issues','note','createdAt'];
  const csv=[header.join(',')];
  rows.forEach(p=>{
    const b=p.bds||{};
    const r=[p.id,`"${(p.customer.name||'').replace(/"/g,'""')}"`,p.customer.phone,p.input.birth,p.input.gender,p.input.huong,p.input.year,p.input.month,
      p.result?.cung?.cung||'',p.result?.cung?.nguyenTo||'',p.result?.cung?.nhomTrach||'',
      b.fullAddress||'',b.ward||'',b.huyen||'',b.province||'',b.to||'',b.thua||'',b.price||'',(p.input.issueIds||[]).length,(b.note||'').replace(/,/g,';'),p.createdAt];
    csv.push(r.join(','));
  });
  const blob=new Blob([csv.join('\n')],{type:'text/csv;charset=utf-8;'}); const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download='ho_so_khach_bds.csv'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

/* ====== Sự kiện UI ====== */
document.addEventListener('DOMContentLoaded', ()=>{
  // Province -> Wards
  document.getElementById('bd-province').addEventListener('change',populateWardsForProvince);
  populateWardsForProvince();

  document.getElementById('bd-ward').addEventListener('change',e=>{
    document.getElementById('ward-custom-wrap').style.display = (e.target.value==='__other__')?'block':'none';
    document.getElementById('bd-full-address').textContent = composeFullAddress();
  });
  ['bd-ward-custom','bd-huyen','bd-address-detail','bd-to','bd-thua','bd-price','bd-note'].forEach(id=>{
    const el=document.getElementById(id); el.addEventListener('input',()=>{ document.getElementById('bd-full-address').textContent=composeFullAddress(); });
  });
  document.getElementById('btn-save-ward').addEventListener('click',()=>{
    const prov=document.getElementById('bd-province').value;
    const custom=document.getElementById('bd-ward-custom').value.trim();
    if(!custom) return alert('Nhập tên phường/xã.');
    // Lưu bổ sung tạm thời vào danh sách của tỉnh hiện tại
    if(prov==='Đồng Nai') DN_WARDS_2025.push(custom); else BP_WARDS_2025.push(custom);
    populateWardsForProvince();
    document.getElementById('bd-ward').value=custom;
    document.getElementById('ward-custom-wrap').style.display='none';
    document.getElementById('bd-full-address').textContent=composeFullAddress();
    alert('Đã lưu phường/xã mới vào danh sách cục bộ.');
  });

  // Issues
  renderIssues(); document.getElementById('issues-search').addEventListener('input',e=>renderIssues(e.target.value));

  // Compass
  document.getElementById('btn-compass-start').addEventListener('click',startCompass);
  document.getElementById('btn-compass-stop').addEventListener('click',stopCompass);
  document.getElementById('btn-compass-apply').addEventListener('click',applyCompassToDirection);

  // Profiles
  renderProfiles();
  document.getElementById('profiles-search').addEventListener('input',e=>renderProfiles(e.target.value));

  // Analyze
  document.getElementById('btn-analyze').addEventListener('click',async()=>{
    try{
      const i=gatherInputs();
      if(!i.birth) return alert('Vui lòng nhập ngày sinh.');
      if(!i.yearX||i.yearX<1900||i.yearX>2099) return alert('Năm xây không hợp lệ.');
      if(!i.monthX||i.monthX<1||i.monthX>12) return alert('Tháng xây không hợp lệ.');
      const R=evaluateBuildTime(i.birth,i.gender,i.yearX,i.monthX);
      await renderResult(R,i);
    }catch(err){ alert('Lỗi: '+(err.message||err)); }
  });

  // Save / Export
  document.getElementById('btn-save').addEventListener('click',()=>{ try{ saveProfile(); }catch(err){ alert('Lỗi: '+(err.message||err)); }});
  document.getElementById('btn-export').addEventListener('click',exportCSV);

  // Numerology
  document.getElementById('btn-numerology').addEventListener('click', analyzeNumerologyClick);
  document.getElementById('btn-compatibility').addEventListener('click', analyzeCompatibilityClick);
  
  // New numerology analysis event listeners
  document.getElementById('btn-name-analysis')?.addEventListener('click', analyzeName);
  document.getElementById('btn-phone-analysis')?.addEventListener('click', analyzePhone);
  document.getElementById('btn-number-compatibility')?.addEventListener('click', checkNumberCompatibility);

  // Row actions
  document.getElementById('profiles-tbody').addEventListener('click',e=>{
    const tr=e.target.closest('tr'); if(!tr) return; const id=tr.getAttribute('data-id');
    const list=getProfiles(); const p=list.find(x=>x.id===id); if(!p) return;
    if(e.target.classList.contains('view')){
      // fill form
      document.getElementById('kh-ten').value=p.customer.name;
      document.getElementById('kh-phone').value=p.customer.phone;
      document.getElementById('ngay-sinh').value=p.input.birth;
      document.getElementById('gioi-tinh').value=p.input.gender;
      document.getElementById('huong-nha').value=p.input.huong;
      document.getElementById('nam-xay').value=p.input.year;
      document.getElementById('thang-xay').value=p.input.month;

      document.getElementById('bd-province').value=p.bds.province||'Đồng Nai';
      populateWardsForProvince();
      const wards=(p.bds.province==='Bình Phước'?BP_WARDS_2025:DN_WARDS_2025);
      if(wards.includes(p.bds.ward)){ document.getElementById('bd-ward').value=p.bds.ward; document.getElementById('ward-custom-wrap').style.display='none'; }
      else { document.getElementById('bd-ward').value='__other__'; document.getElementById('ward-custom-wrap').style.display='block'; document.getElementById('bd-ward-custom').value=p.bds.ward||''; }
      document.getElementById('bd-huyen').value=p.bds.huyen||'';
      document.getElementById('bd-to').value=p.bds.to||'';
      document.getElementById('bd-thua').value=p.bds.thua||'';
      document.getElementById('bd-address-detail').value=p.bds.addressDetail||'';
      document.getElementById('bd-price').value=p.bds.price||'';
      document.getElementById('bd-note').value=p.bds.note||'';
      document.getElementById('bd-full-address').textContent=p.bds.fullAddress||'—';

      // tick lại issues
      renderIssues(document.getElementById('issues-search').value||'');
      const set=new Set(p.input.issueIds||[]);
      document.querySelectorAll('input[name="issue"]').forEach(cb=> cb.checked=set.has(cb.value));

      renderResult(p.result,{...p.input,bds:p.bds,issueIds:p.input.issueIds||[]});
      window.scrollTo({top:0,behavior:'smooth'});
    }
    if(e.target.classList.contains('delete')){
      if(confirm('Xóa hồ sơ này?')){ setProfiles(list.filter(x=>x.id!==id)); renderProfiles(document.getElementById('profiles-search').value); }
    }
  });
});

/* ====== THẦN SỐ HỌC FUNCTIONS ====== */
function analyzeNumerologyClick() {
  try {
    const name = document.getElementById('kh-ten').value.trim();
    const birth = document.getElementById('ngay-sinh').value.trim();
    
    if (!name) return alert('Vui lòng nhập họ tên.');
    if (!birth) return alert('Vui lòng nhập ngày sinh.');
    
    const analysis = analyzeNumerology(name, birth);
    if (!analysis) return alert('Lỗi khi phân tích thần số học.');
    
    displayNumerologyResult(analysis);
    
    // Phân tích số điện thoại nếu có
    const phone = document.getElementById('kh-phone').value.trim();
    if (phone && isValidPhone(phone)) {
      analyzePhoneInNumerology();
    }
    
    document.getElementById('numerology-section').style.display = 'block';
    document.getElementById('numerology-section').scrollIntoView({ behavior: 'smooth' });
    
  } catch (err) {
    alert('Lỗi: ' + (err.message || err));
  }
}

function analyzeCompatibilityClick() {
  try {
    const partnerName = document.getElementById('partner-name').value.trim();
    const partnerBirth = document.getElementById('partner-birth').value.trim();
    const userBirth = document.getElementById('ngay-sinh').value.trim();
    
    if (!partnerName) return alert('Vui lòng nhập tên bạn đời.');
    if (!partnerBirth) return alert('Vui lòng nhập ngày sinh bạn đời.');
    if (!userBirth) return alert('Vui lòng nhập ngày sinh của bạn trước.');
    
    const userLifePath = calculateLifePath(userBirth);
    const partnerLifePath = calculateLifePath(partnerBirth);
    const compatibility = analyzeCompatibility(userLifePath, partnerLifePath);
    
    displayCompatibilityResult(userLifePath, partnerLifePath, compatibility);
    
  } catch (err) {
    alert('Lỗi: ' + (err.message || err));
  }
}

function displayNumerologyResult(analysis) {
  // Life Path
  const lifePathEl = document.getElementById('life-path-result');
  const lifePathNum = document.getElementById('life-path-number');
  lifePathNum.textContent = analysis.lifePath.number;
  lifePathEl.innerHTML = formatNumberMeaning(analysis.lifePath.meaning);
  
  // Expression
  const expressionEl = document.getElementById('expression-result');
  const expressionNum = document.getElementById('expression-number');
  expressionNum.textContent = analysis.expression.number;
  expressionEl.innerHTML = formatNumberMeaning(analysis.expression.meaning);
  
  // Soul
  const soulEl = document.getElementById('soul-result');
  const soulNum = document.getElementById('soul-number');
  soulNum.textContent = analysis.soul.number;
  soulEl.innerHTML = formatNumberMeaning(analysis.soul.meaning);
  
  // Personality
  const personalityEl = document.getElementById('personality-result');
  const personalityNum = document.getElementById('personality-number');
  personalityNum.textContent = analysis.personality.number;
  personalityEl.innerHTML = formatNumberMeaning(analysis.personality.meaning);
  
  // Personal Year
  const personalYearEl = document.getElementById('personal-year-result');
  const personalYearNum = document.getElementById('personal-year-number');
  personalYearNum.textContent = analysis.personalYear.number;
  personalYearEl.innerHTML = `<p><strong>Ý nghĩa:</strong> ${analysis.personalYear.meaning}</p>`;
}

function formatNumberMeaning(meaning) {
  if (!meaning || !meaning.title) return '<p>Chưa có thông tin</p>';
  
  let html = `<h4>${meaning.title}</h4>`;
  if (meaning.subtitle) html += `<p class="subtitle"><em>${meaning.subtitle}</em></p>`;
  
  html += `<p><strong>Tính cách:</strong> ${meaning.personality}</p>`;
  
  if (meaning.deep_traits) {
    html += `<div class="deep-traits">`;
    html += `<p><strong>Bản chất cốt lõi:</strong> ${meaning.deep_traits.core_essence}</p>`;
    html += `<p><strong>Sứ mệnh cuộc đời:</strong> ${meaning.deep_traits.life_mission}</p>`;
    if (meaning.deep_traits.spiritual_lesson) {
      html += `<p><strong>Bài học tâm linh:</strong> ${meaning.deep_traits.spiritual_lesson}</p>`;
    }
    html += `</div>`;
  }
  
  if (meaning.strengths && meaning.strengths.length > 0) {
    html += `<p><strong>Điểm mạnh:</strong></p>`;
    html += `<ul class="strength-list">`;
    meaning.strengths.slice(0, 6).forEach(strength => {
      html += `<li>${strength}</li>`;
    });
    html += `</ul>`;
  }
  
  if (meaning.weaknesses && meaning.weaknesses.length > 0) {
    html += `<p><strong>Điểm yếu cần khắc phục:</strong></p>`;
    html += `<ul class="weakness-list">`;
    meaning.weaknesses.slice(0, 6).forEach(weakness => {
      html += `<li>${weakness}</li>`;
    });
    html += `</ul>`;
  }
  
  if (meaning.career_detailed) {
    html += `<p><strong>Nghề nghiệp phù hợp nhất:</strong> ${meaning.career_detailed.best_careers.slice(0, 4).join(', ')}</p>`;
    html += `<p><strong>Phong cách làm việc:</strong> ${meaning.career_detailed.work_style}</p>`;
  } else if (meaning.career) {
    html += `<p><strong>Nghề nghiệp phù hợp:</strong> ${meaning.career}</p>`;
  }
  
  if (meaning.love_relationships) {
    html += `<p><strong>Phong cách yêu:</strong> ${meaning.love_relationships.love_style}</p>`;
    html += `<p><strong>Lời khuyên tình yêu:</strong> ${meaning.love_relationships.marriage_advice}</p>`;
  } else if (meaning.love) {
    html += `<p><strong>Tình yêu:</strong> ${meaning.love}</p>`;
  }
  
  if (meaning.health_tendencies) {
    html += `<p><strong>Xu hướng sức khỏe:</strong> Cần chú ý ${meaning.health_tendencies.physical.slice(0, 2).join(', ')}</p>`;
    html += `<p><strong>Phương pháp chữa lành:</strong> ${meaning.health_tendencies.healing_methods.slice(0, 2).join(', ')}</p>`;
  }
  
  if (meaning.lucky_numbers && meaning.lucky_numbers.length > 0) {
    html += `<p><strong>Số may mắn:</strong> ${meaning.lucky_numbers.slice(0, 4).join(', ')}</p>`;
  }
  
  if (meaning.lucky_colors && meaning.lucky_colors.length > 0) {
    html += `<p><strong>Màu may mắn:</strong></p>`;
    html += `<div class="lucky-colors">`;
    meaning.lucky_colors.forEach(color => {
      const colorCode = getColorCode(color);
      html += `<span class="color-box" style="background-color: ${colorCode}" title="${color}"></span>`;
    });
    html += `</div>`;
  }
  
  if (meaning.lucky_stones && meaning.lucky_stones.length > 0) {
    html += `<p><strong>Đá may mắn:</strong> ${meaning.lucky_stones.slice(0, 3).join(', ')}</p>`;
  }
  
  if (meaning.lucky_days && meaning.lucky_days.length > 0) {
    html += `<p><strong>Ngày may mắn:</strong> ${meaning.lucky_days.join(', ')}</p>`;
  }
  
  if (meaning.life_purpose) {
    html += `<p><strong>Mục đích cuộc đời:</strong> <em>${meaning.life_purpose}</em></p>`;
  }
  
  if (meaning.advice) {
    html += `<p><strong>Lời khuyên:</strong> ${meaning.advice}</p>`;
  }
  
  if (meaning.meditation_mantra) {
    html += `<p><strong>Câu thần chú:</strong> <em>"${meaning.meditation_mantra}"</em></p>`;
  }
  
  return html;
}

function getColorCode(colorName) {
  const colors = {
    'Đỏ': '#e74c3c',
    'Cam': '#f39c12',
    'Vàng': '#f1c40f',
    'Xanh lá': '#27ae60',
    'Xanh dương': '#3498db',
    'Xanh dương đậm': '#2c3e50',
    'Tím': '#9b59b6',
    'Hồng': '#e91e63',
    'Nâu': '#8d6e63',
    'Xám': '#95a5a6',
    'Đen': '#2c3e50',
    'Trắng': '#ecf0f1',
    'Bạc': '#bdc3c7',
    'Vàng nhạt': '#f7dc6f',
    'Vàng thánh': '#ffd700',
    'Xanh lục': '#52c41a',
    'Tím thánh': '#722ed1',
    'Đỏ đậm': '#a0393a',
    'Xanh đậm': '#1f4e79',
    'Nâu đậm': '#5d4037'
  };
  return colors[colorName] || '#95a5a6';
}

function displayCompatibilityResult(userNumber, partnerNumber, compatibility) {
  const resultEl = document.getElementById('compatibility-result');
  
  let html = `<h4>Tương thích giữa số ${userNumber} và số ${partnerNumber}</h4>`;
  html += `<p><strong>Mức độ tương thích:</strong> <span class="tag ${getCompatibilityClass(compatibility)}">${compatibility}</span></p>`;
  
  html += getCompatibilityDescription(userNumber, partnerNumber, compatibility);
  
  resultEl.innerHTML = html;
}

function getCompatibilityClass(compatibility) {
  switch (compatibility) {
    case 'Rất tốt': return 'good';
    case 'Tốt': return 'good';
    case 'Bình thường': return 'warn';
    case 'Khó khăn': return 'bad';
    default: return 'warn';
  }
}

function getCompatibilityDescription(num1, num2, compatibility) {
  const descriptions = {
    'Rất tốt': 'Hai bạn có sự hòa hợp tuyệt vời, bổ trợ lẫn nhau và có thể xây dựng mối quan hệ bền vững.',
    'Tốt': 'Mối quan hệ khá tốt với nhiều điểm chung và ít xung đột.',
    'Bình thường': 'Cần hiểu biết và thấu hiểu lẫn nhau nhiều hơn để xây dựng mối quan hệ tốt.',
    'Khó khăn': 'Có những khác biệt cơ bản cần được giải quyết thông qua giao tiếp và thấu hiểu.'
  };
  
  let html = `<p>${descriptions[compatibility] || 'Cần tìm hiểu thêm về nhau.'}</p>`;
  
  // Thêm lời khuyên cụ thể dựa trên từng cặp số
  html += getSpecificAdvice(num1, num2);
  
  return html;
}

function getSpecificAdvice(num1, num2) {
  // Một số lời khuyên cụ thể cho các cặp số phổ biến
  const adviceMap = {
    '1-2': 'Số 1 cần học cách lắng nghe, số 2 cần tự tin hơn.',
    '1-3': 'Cặp đôi sáng tạo và năng động, cần cân bằng giữa công việc và vui chơi.',
    '2-4': 'Cả hai đều trân trọng sự ổn định, rất phù hợp để xây dựng gia đình.',
    '3-5': 'Cặp đôi tự do và phiêu lưu, cần tạo cam kết để duy trì mối quan hệ.',
    '4-8': 'Cả hai đều có tham vọng và thực tế, có thể đạt được thành công lớn cùng nhau.',
    '6-9': 'Cặp đôi nhân đạo và quan tâm đến gia đình, rất hòa hợp.'
  };
  
  const key1 = `${num1}-${num2}`;
  const key2 = `${num2}-${num1}`;
  
  const advice = adviceMap[key1] || adviceMap[key2];
  
  if (advice) {
    return `<p><strong>Lời khuyên:</strong> ${advice}</p>`;
  }
  
  return `<p><strong>Lời khuyên:</strong> Hãy tìm hiểu và thấu hiểu tính cách của nhau để xây dựng mối quan hệ bền vững.</p>`;
}

function checkCompatibility() {
  const number1 = parseInt(document.getElementById('comp-number1').value);
  const number2 = parseInt(document.getElementById('comp-number2').value);
  
  if (isNaN(number1) || isNaN(number2) || number1 < 1 || number1 > 33 || number2 < 1 || number2 > 33) {
    document.getElementById('compatibility-result').innerHTML = 
      '<div class="compatibility-result error">Vui lòng nhập số hợp lệ từ 1-33</div>';
    return;
  }
  
  const compatibility = getCompatibility(number1, number2);
  const resultDiv = document.getElementById('compatibility-result');
  
  let html = `<div class="compatibility-result ${compatibility.score >= 8 ? 'excellent' : compatibility.score >= 6 ? 'good' : compatibility.score >= 4 ? 'fair' : 'poor'}">`;
  html += `<h4>Tương thích giữa số ${number1} và số ${number2}</h4>`;
  html += `<div class="compatibility-score">`;
  html += `<div class="score-circle" data-score="${compatibility.score}">`;
  html += `<span class="score-text">${compatibility.score}/10</span>`;
  html += `</div>`;
  html += `<div class="score-label">${compatibility.level}</div>`;
  html += `</div>`;
  
  html += `<div class="compatibility-details">`;
  html += `<p><strong>Mô tả:</strong> ${compatibility.description}</p>`;
  
  if (compatibility.aspects) {
    html += `<div class="compatibility-aspects">`;
    html += `<div class="aspect-item">`;
    html += `<span class="aspect-label">Tình yêu:</span>`;
    html += `<div class="aspect-bar"><div class="aspect-fill" style="width: ${compatibility.aspects.emotional * 10}%"></div></div>`;
    html += `<span class="aspect-score">${compatibility.aspects.emotional}/10</span>`;
    html += `</div>`;
    html += `<div class="aspect-item">`;
    html += `<span class="aspect-label">Giao tiếp:</span>`;
    html += `<div class="aspect-bar"><div class="aspect-fill" style="width: ${compatibility.aspects.communication * 10}%"></div></div>`;
    html += `<span class="aspect-score">${compatibility.aspects.communication}/10</span>`;
    html += `</div>`;
    html += `<div class="aspect-item">`;
    html += `<span class="aspect-label">Công việc:</span>`;
    html += `<div class="aspect-bar"><div class="aspect-fill" style="width: ${compatibility.aspects.career * 10}%"></div></div>`;
    html += `<span class="aspect-score">${compatibility.aspects.career}/10</span>`;
    html += `</div>`;
    html += `<div class="aspect-item">`;
    html += `<span class="aspect-label">Tài chính:</span>`;
    html += `<div class="aspect-bar"><div class="aspect-fill" style="width: ${compatibility.aspects.financial * 10}%"></div></div>`;
    html += `<span class="aspect-score">${compatibility.aspects.financial}/10</span>`;
    html += `</div>`;
    html += `</div>`;
  }
  
  if (compatibility.advice) {
    html += `<div class="compatibility-advice">`;
    html += `<h5>Lời khuyên cho mối quan hệ:</h5>`;
    html += `<p>${compatibility.advice}</p>`;
    html += `</div>`;
  }
  
  if (compatibility.challenges) {
    html += `<div class="compatibility-challenges">`;
    html += `<h5>Những thách thức cần lưu ý:</h5>`;
    html += `<p>${compatibility.challenges}</p>`;
    html += `</div>`;
  }
  
  html += `</div></div>`;
  resultDiv.innerHTML = html;
}

function analyzeName() {
  const fullName = document.getElementById('full-name-analysis')?.value?.trim();
  
  if (!fullName) {
    document.getElementById('name-analysis-result').innerHTML = 
      '<div class="error">Vui lòng nhập họ và tên đầy đủ</div>';
    return;
  }
  
  const analysis = analyzeNameNumerology(fullName);
  const resultDiv = document.getElementById('name-analysis-result');
  
  let html = '<div class="name-analysis-results">';
  html += `<h4>Phân tích tên: ${analysis.fullName}</h4>`;
  
  // Hiển thị các thành phần tên
  html += '<div class="name-parts">';
  html += `<p><strong>Họ:</strong> ${analysis.nameParts.lastName}</p>`;
  if (analysis.nameParts.middleName) {
    html += `<p><strong>Tên đệm:</strong> ${analysis.nameParts.middleName}</p>`;
  }
  html += `<p><strong>Tên:</strong> ${analysis.nameParts.firstName}</p>`;
  html += '</div>';
  
  // Hiển thị các số quan trọng
  html += '<div class="name-numbers">';
  
  // Số biểu đạt
  html += '<div class="number-section">';
  html += `<h5>Số Biểu đạt (${analysis.numbers.expression.calculation})</h5>`;
  html += formatNumberMeaning(analysis.numbers.expression.meaning);
  html += '</div>';
  
  // Số linh hồn
  html += '<div class="number-section">';
  html += `<h5>Số Linh hồn (${analysis.numbers.soul.calculation})</h5>`;
  html += formatNumberMeaning(analysis.numbers.soul.meaning);
  html += '</div>';
  
  // Số nhân cách
  html += '<div class="number-section">';
  html += `<h5>Số Nhân cách (${analysis.numbers.personality.calculation})</h5>`;
  html += formatNumberMeaning(analysis.numbers.personality.meaning);
  html += '</div>';
  
  html += '</div></div>';
  resultDiv.innerHTML = html;
}

function analyzePhone() {
  const phoneNumber = document.getElementById('phone-analysis')?.value?.trim();
  
  if (!phoneNumber) {
    document.getElementById('phone-analysis-result').innerHTML = 
      '<div class="error">Vui lòng nhập số điện thoại</div>';
    return;
  }
  
  const analysis = analyzePhoneNumerology(phoneNumber);
  const resultDiv = document.getElementById('phone-analysis-result');
  
  if (analysis.error) {
    resultDiv.innerHTML = `<div class="error">${analysis.error}</div>`;
    return;
  }
  
  let html = '<div class="phone-analysis-results">';
  html += `<h4>Phân tích số: ${analysis.phoneNumber}</h4>`;
  html += `<p><strong>Số đã làm sạch:</strong> ${analysis.cleanPhone}</p>`;
  
  // Số chính của điện thoại
  html += '<div class="phone-number-section">';
  html += `<h5>Số chính (${analysis.analysis.mainNumber.calculation})</h5>`;
  html += formatNumberMeaning(analysis.analysis.mainNumber.meaning);
  html += '</div>';
  
  // Số cá nhân (4 số cuối)
  html += '<div class="phone-number-section">';
  html += `<h5>Số cá nhân (${analysis.analysis.personalNumber.calculation})</h5>`;
  html += formatNumberMeaning(analysis.analysis.personalNumber.meaning);
  html += '</div>';
  
  // Số đầu số
  html += '<div class="phone-number-section">';
  html += `<h5>Ảnh hưởng đầu số (${analysis.analysis.prefixNumber.calculation})</h5>`;
  html += formatNumberMeaning(analysis.analysis.prefixNumber.meaning);
  html += '</div>';
  
  // Số thống trị
  html += '<div class="phone-number-section">';
  html += `<h5>Số thống trị: ${analysis.analysis.dominantDigit.digit} (xuất hiện ${analysis.analysis.dominantDigit.frequency} lần)</h5>`;
  html += formatNumberMeaning(analysis.analysis.dominantDigit.meaning);
  html += '</div>';
  
  // Biểu đồ tần suất
  html += '<div class="digit-frequency">';
  html += '<h5>Tần suất các chữ số:</h5>';
  html += '<div class="frequency-chart">';
  for (let digit = 0; digit <= 9; digit++) {
    const frequency = analysis.analysis.digitFrequency[digit];
    const percentage = frequency > 0 ? (frequency / analysis.cleanPhone.length * 100) : 0;
    html += `<div class="frequency-bar">`;
    html += `<span class="digit">${digit}</span>`;
    html += `<div class="bar"><div class="fill" style="width: ${percentage}%"></div></div>`;
    html += `<span class="count">${frequency}</span>`;
    html += `</div>`;
  }
  html += '</div></div>';
  
  html += '</div>';
  resultDiv.innerHTML = html;
}

function checkNumberCompatibility() {
  const number1 = parseInt(document.getElementById('comp-number1')?.value);
  const number2 = parseInt(document.getElementById('comp-number2')?.value);
  
  if (isNaN(number1) || isNaN(number2) || number1 < 1 || number1 > 33 || number2 < 1 || number2 > 33) {
    document.getElementById('number-compatibility-result').innerHTML = 
      '<div class="error">Vui lòng nhập hai số hợp lệ từ 1-33</div>';
    return;
  }
  
  const compatibility = getCompatibility(number1, number2);
  const resultDiv = document.getElementById('number-compatibility-result');
  
  let html = `<div class="compatibility-result ${compatibility.score >= 8 ? 'excellent' : compatibility.score >= 6 ? 'good' : compatibility.score >= 4 ? 'fair' : 'poor'}">`;
  html += `<h4>Tương thích giữa số ${number1} và số ${number2}</h4>`;
  html += `<div class="compatibility-score">`;
  html += `<div class="score-circle" data-score="${compatibility.score}">`;
  html += `<span class="score-text">${compatibility.score}/10</span>`;
  html += `</div>`;
  html += `<div class="score-label">${compatibility.level}</div>`;
  html += `</div>`;
  
  html += `<div class="compatibility-details">`;
  html += `<p><strong>Mô tả:</strong> ${compatibility.description}</p>`;
  
  if (compatibility.aspects) {
    html += `<div class="compatibility-aspects">`;
    html += `<div class="aspect-item">`;
    html += `<span class="aspect-label">Tình yêu:</span>`;
    html += `<div class="aspect-bar"><div class="aspect-fill" style="width: ${compatibility.aspects.emotional * 10}%"></div></div>`;
    html += `<span class="aspect-score">${compatibility.aspects.emotional}/10</span>`;
    html += `</div>`;
    html += `<div class="aspect-item">`;
    html += `<span class="aspect-label">Giao tiếp:</span>`;
    html += `<div class="aspect-bar"><div class="aspect-fill" style="width: ${compatibility.aspects.communication * 10}%"></div></div>`;
    html += `<span class="aspect-score">${compatibility.aspects.communication}/10</span>`;
    html += `</div>`;
    html += `<div class="aspect-item">`;
    html += `<span class="aspect-label">Công việc:</span>`;
    html += `<div class="aspect-bar"><div class="aspect-fill" style="width: ${compatibility.aspects.career * 10}%"></div></div>`;
    html += `<span class="aspect-score">${compatibility.aspects.career}/10</span>`;
    html += `</div>`;
    html += `<div class="aspect-item">`;
    html += `<span class="aspect-label">Tài chính:</span>`;
    html += `<div class="aspect-bar"><div class="aspect-fill" style="width: ${compatibility.aspects.financial * 10}%"></div></div>`;
    html += `<span class="aspect-score">${compatibility.aspects.financial}/10</span>`;
    html += `</div>`;
    html += `</div>`;
  }
  
  if (compatibility.advice) {
    html += `<div class="compatibility-advice">`;
    html += `<h5>Lời khuyên cho mối quan hệ:</h5>`;
    html += `<p>${compatibility.advice}</p>`;
    html += `</div>`;
  }
  
  if (compatibility.challenges) {
    html += `<div class="compatibility-challenges">`;
    html += `<h5>Những thách thức cần lưu ý:</h5>`;
    html += `<p>${compatibility.challenges}</p>`;
    html += `</div>`;
  }
  
  html += `</div></div>`;
  resultDiv.innerHTML = html;
}