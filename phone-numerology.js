// ===== PHONE NUMEROLOGY FUNCTIONS =====

// Helper functions
function normalizePhone(p){ 
  p=(p||'').replace(/[^\d+]/g,'').trim(); 
  if(p.startsWith('+84'))return p; 
  if(p.startsWith('0')&&p.length>=9)return '+84'+p.slice(1); 
  return p; 
}

function isValidPhone(p){ 
  p=normalizePhone(p); 
  const vn=/^\+?84(3|5|7|8|9)\d{8}$/; 
  const g=/^\+?\d{8,13}$/; 
  return vn.test(p)||g.test(p); 
}

// Phân tích số điện thoại trong thần số học
function analyzePhoneInNumerology() {
  const phoneInput = document.getElementById('kh-phone').value.trim();
  
  if (!phoneInput) {
    // Không alert nếu không có số điện thoại, chỉ bỏ qua
    console.log('Không có số điện thoại để phân tích');
    return;
  }

  if (!isValidPhone(phoneInput)) {
    alert('Số điện thoại không đúng định dạng!');
    return;
  }

  try {
    // Phân tích số điện thoại
    const analysis = analyzePhoneNumerology(phoneInput);
    console.log('Phone analysis result:', analysis);
    
    // Hiển thị kết quả
    const phoneNumberDiv = document.getElementById('phone-number');
    const phoneResultDiv = document.getElementById('phone-result');
    
    if (phoneNumberDiv && phoneResultDiv) {
      phoneNumberDiv.innerHTML = analysis.analysis.mainNumber.number;
      
      let html = `<div class="phone-analysis-result">`;
      html += `<h4>📱 Phân tích số ${analysis.phoneNumber}</h4>`;
      
      // Số chính
      html += `<div class="analysis-section">`;
      html += `<h5>🔢 ${analysis.analysis.mainNumber.meaning.title || 'Số chính'} (${analysis.analysis.mainNumber.calculation})</h5>`;
      html += `<p><strong>Đặc điểm:</strong> ${analysis.analysis.mainNumber.meaning.personality}</p>`;
      if (analysis.analysis.mainNumber.meaning.business_impact) {
        html += `<p><strong>Tác động kinh doanh:</strong> ${analysis.analysis.mainNumber.meaning.business_impact}</p>`;
      }
      if (analysis.analysis.mainNumber.meaning.feng_shui) {
        html += `<p><strong>Phong thủy:</strong> ${analysis.analysis.mainNumber.meaning.feng_shui}</p>`;
      }
      html += `</div>`;
      
      // Số cá nhân (4 số cuối)
      html += `<div class="analysis-section">`;
      html += `<h5>👤 Số cá nhân (${analysis.analysis.personalNumber.calculation})</h5>`;
      html += `<p><strong>Đặc điểm:</strong> ${analysis.analysis.personalNumber.meaning.personality}</p>`;
      if (analysis.analysis.personalNumber.meaning.relationship) {
        html += `<p><strong>Trong tình yêu:</strong> ${analysis.analysis.personalNumber.meaning.relationship}</p>`;
      }
      if (analysis.analysis.personalNumber.meaning.compatibility) {
        html += `<p><strong>Tương thích:</strong> ${analysis.analysis.personalNumber.meaning.compatibility}</p>`;
      }
      html += `</div>`;
      
      // Số đầu số
      html += `<div class="analysis-section">`;
      html += `<h5>📞 Đầu số (${analysis.analysis.prefixNumber.calculation})</h5>`;
      html += `<p><strong>Đặc điểm:</strong> ${analysis.analysis.prefixNumber.meaning.personality}</p>`;
      if (analysis.analysis.prefixNumber.meaning.career) {
        html += `<p><strong>Nghề nghiệp phù hợp:</strong> ${analysis.analysis.prefixNumber.meaning.career}</p>`;
      }
      if (analysis.analysis.prefixNumber.meaning.energy) {
        html += `<p><strong>Năng lượng:</strong> ${analysis.analysis.prefixNumber.meaning.energy}</p>`;
      }
      html += `</div>`;
      
      // Thống kê số
      if (analysis.statistics) {
        html += `<div class="analysis-section">`;
        html += `<h5>📊 Thống kê các số</h5>`;
        html += `<div class="number-frequency">`;
        for (let i = 0; i <= 9; i++) {
          const count = analysis.statistics.digitFrequency[i] || 0;
          if (count > 0) {
            html += `<span class="freq-item">Số ${i}: ${count} lần</span>`;
          }
        }
        html += `</div>`;
        
        if (analysis.statistics.dominantDigit !== undefined) {
          html += `<p><strong>Số thống trị:</strong> ${analysis.statistics.dominantDigit}</p>`;
          html += `<p>${analysis.statistics.dominantMeaning}</p>`;
        }
        html += `</div>`;
      }

      // Phân tích tổng hợp
      html += `<div class="analysis-section summary-section">`;
      html += `<h5>🎯 Đánh giá tổng hợp</h5>`;
      html += `<div class="phone-summary">`;
      
      // Đánh giá phù hợp cho nghề nghiệp
      const mainNum = analysis.analysis.mainNumber.number;
      const personalNum = analysis.analysis.personalNumber.number;
      const prefixNum = analysis.analysis.prefixNumber.number;
      
      let careerMatch = [];
      if ([1, 8].includes(mainNum)) careerMatch.push("Lãnh đạo, Kinh doanh");
      if ([2, 6].includes(mainNum)) careerMatch.push("Tư vấn, Chăm sóc khách hàng");
      if ([3, 5].includes(mainNum)) careerMatch.push("Sáng tạo, Marketing");
      if ([4, 7].includes(mainNum)) careerMatch.push("Nghiên cứu, Phân tích");
      if (mainNum === 9) careerMatch.push("Giáo dục, Xã hội");
      
      if (careerMatch.length > 0) {
        html += `<p><strong>🏢 Nghề nghiệp phù hợp:</strong> ${careerMatch.join(", ")}</p>`;
      }
      
      // Thời điểm tốt để sử dụng
      const luckyTimes = [];
      if ([1, 3, 9].includes(mainNum)) luckyTimes.push("Buổi sáng");
      if ([2, 6].includes(mainNum)) luckyTimes.push("Buổi chiều");
      if ([4, 8].includes(mainNum)) luckyTimes.push("Giờ hành chính");
      if ([5, 7].includes(mainNum)) luckyTimes.push("Buổi tối");
      
      if (luckyTimes.length > 0) {
        html += `<p><strong>⏰ Thời điểm may mắn:</strong> ${luckyTimes.join(", ")}</p>`;
      }
      
      // Màu sắc phù hợp
      const colors = {
        1: "Đỏ, Cam",
        2: "Xanh lam, Bạc", 
        3: "Vàng, Cam",
        4: "Xanh lá, Nâu",
        5: "Xanh dương, Bạc",
        6: "Hồng, Xanh lá",
        7: "Tím, Xanh dương",
        8: "Đen, Vàng",
        9: "Đỏ, Vàng"
      };
      
      if (colors[mainNum]) {
        html += `<p><strong>🎨 Màu sắc phù hợp:</strong> ${colors[mainNum]}</p>`;
      }
      
      html += `</div>`;
      html += `</div>`;
      
      html += `</div>`;
      phoneResultDiv.innerHTML = html;
      console.log('Phone analysis displayed successfully');
    } else {
      console.error('Không tìm thấy elements: phone-number hoặc phone-result');
    }
  } catch (error) {
    console.error('Lỗi khi phân tích số điện thoại:', error);
    alert('Lỗi khi phân tích số điện thoại: ' + error.message);
  }
}

// Đề xuất số điện thoại phù hợp
function suggestCompatiblePhones() {
  const name = document.getElementById('suggest-name').value.trim();
  const birth = document.getElementById('suggest-birth').value.trim();
  const prefix = document.getElementById('suggest-prefix').value;
  const luckyInput = document.getElementById('suggest-lucky').value.trim();
  const avoidInput = document.getElementById('suggest-avoid').value.trim();
  
  if (!name && !birth) {
    alert('Vui lòng nhập ít nhất tên hoặc ngày sinh để đề xuất số điện thoại phù hợp!');
    return;
  }
  
  // Parse lucky và avoid numbers
  const luckyNumbers = luckyInput ? luckyInput.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n) && n >= 0 && n <= 9) : [];
  const avoidNumbers = avoidInput ? avoidInput.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n) && n >= 0 && n <= 9) : [];
  
  // Gọi function đề xuất
  const suggestions = suggestPhoneNumbers({
    name: name,
    birthDate: birth,
    prefix: prefix,
    luckyNumbers: luckyNumbers,
    avoidNumbers: avoidNumbers,
    count: 8
  });
  
  // Hiển thị kết quả
  displayPhoneSuggestions(suggestions, name, birth);
}

// Hiển thị kết quả đề xuất số điện thoại
function displayPhoneSuggestions(suggestions, name, birth) {
  const resultDiv = document.getElementById('phone-suggestions-result');
  
  if (!suggestions || suggestions.length === 0) {
    resultDiv.innerHTML = '<p>Không tìm thấy số điện thoại phù hợp. Vui lòng thử lại với điều kiện khác.</p>';
    return;
  }
  
  let html = `<div class="suggestions-container">`;
  html += `<h4>📱 Đề xuất ${suggestions.length} số điện thoại phù hợp${name ? ` cho ${name}` : ''}</h4>`;
  
  if (birth) {
    const lifePath = calculateLifePath(birth);
    html += `<p class="user-info">Số chủ đạo của bạn: <strong>${lifePath}</strong></p>`;
  }
  
  suggestions.forEach((suggestion, index) => {
    const rating = suggestion.rating;
    html += `<div class="phone-suggestion-item">`;
    html += `<div class="suggestion-header">`;
    html += `<span class="suggestion-rank">#${index + 1}</span>`;
    html += `<div class="phone-number-large">${suggestion.phoneNumber}</div>`;
    html += `<span class="compatibility-score score-${rating.level}" style="background: ${rating.color}">${rating.text} (${suggestion.compatibilityScore} điểm)</span>`;
    html += `</div>`;
    
    // Phân tích chính
    html += `<div class="suggestion-analysis">`;
    html += `<div class="analysis-grid">`;
    html += `<div><strong>Số chính:</strong> ${suggestion.analysis.analysis.mainNumber.number}</div>`;
    html += `<div><strong>Số cá nhân:</strong> ${suggestion.analysis.analysis.personalNumber.number}</div>`;
    html += `</div>`;
    html += `</div>`;
    
    // Chi tiết điểm số
    if (suggestion.scoreDetails.length > 0) {
      html += `<div class="score-details">`;
      html += `<strong>Chi tiết điểm:</strong>`;
      html += `<ul>`;
      suggestion.scoreDetails.forEach(detail => {
        html += `<li>${detail}</li>`;
      });
      html += `</ul>`;
      html += `</div>`;
    }
    
    html += `</div>`;
  });
  
  html += `</div>`;
  resultDiv.innerHTML = html;
}

// Clear suggestions
function clearPhoneSuggestions() {
  document.getElementById('phone-suggestions-result').innerHTML = '';
  document.getElementById('suggest-name').value = '';
  document.getElementById('suggest-birth').value = '';
  document.getElementById('suggest-prefix').value = '';
  document.getElementById('suggest-lucky').value = '';
  document.getElementById('suggest-avoid').value = '';
}

// Gắn event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Button đề xuất số điện thoại
  const btnSuggestPhones = document.getElementById('btn-suggest-phones');
  if (btnSuggestPhones) {
    btnSuggestPhones.addEventListener('click', suggestCompatiblePhones);
  }

  // Button xóa gợi ý
  const btnClearSuggestions = document.getElementById('btn-clear-suggestions');
  if (btnClearSuggestions) {
    btnClearSuggestions.addEventListener('click', clearPhoneSuggestions);
  }

  // Auto-fill suggest fields từ input chính
  const khTen = document.getElementById('kh-ten');
  const ngaySinh = document.getElementById('ngay-sinh');
  const suggestName = document.getElementById('suggest-name');
  const suggestBirth = document.getElementById('suggest-birth');
  
  if (khTen && suggestName) {
    khTen.addEventListener('blur', function() {
      if (!suggestName.value && khTen.value.trim()) {
        suggestName.value = khTen.value.trim();
      }
    });
  }
  
  if (ngaySinh && suggestBirth) {
    ngaySinh.addEventListener('blur', function() {
      if (!suggestBirth.value && ngaySinh.value.trim()) {
        suggestBirth.value = ngaySinh.value.trim();
      }
    });
  }
});
