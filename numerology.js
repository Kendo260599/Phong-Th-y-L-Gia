/* ====== THƯ VIỆN THẦN SỐ HỌC ====== */

// Helper function: Rút gọn số về 1 chữ số (trừ số chủ 11, 22, 33)
function reduceToSingleDigit(sum) {
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let newSum = 0;
    while (sum > 0) {
      newSum += sum % 10;
      sum = Math.floor(sum / 10);
    }
    sum = newSum;
  }
  return sum;
}

// Bảng chuyển đổi chữ cái tiếng Việt sang số theo Pythagoras
const LETTER_TO_NUMBER = {
  // Vowels và consonants cơ bản
  'A': 1, 'Á': 1, 'À': 1, 'Ả': 1, 'Ã': 1, 'Ạ': 1,
  'Ă': 1, 'Ắ': 1, 'Ằ': 1, 'Ẳ': 1, 'Ẵ': 1, 'Ặ': 1,
  'Â': 1, 'Ấ': 1, 'Ầ': 1, 'Ẩ': 1, 'Ẫ': 1, 'Ậ': 1,
  'B': 2,
  'C': 3,
  'D': 4, 'Đ': 4,
  'E': 5, 'É': 5, 'È': 5, 'Ẻ': 5, 'Ẽ': 5, 'Ẹ': 5,
  'Ê': 5, 'Ế': 5, 'Ề': 5, 'Ể': 5, 'Ễ': 5, 'Ệ': 5,
  'F': 6,
  'G': 7,
  'H': 8,
  'I': 9, 'Í': 9, 'Ì': 9, 'Ỉ': 9, 'Ĩ': 9, 'Ị': 9,
  'J': 1,
  'K': 2,
  'L': 3,
  'M': 4,
  'N': 5,
  'O': 6, 'Ó': 6, 'Ò': 6, 'Ỏ': 6, 'Õ': 6, 'Ọ': 6,
  'Ô': 6, 'Ố': 6, 'Ồ': 6, 'Ổ': 6, 'Ỗ': 6, 'Ộ': 6,
  'Ơ': 6, 'Ớ': 6, 'Ờ': 6, 'Ở': 6, 'Ỡ': 6, 'Ợ': 6,
  'P': 7,
  'Q': 8,
  'R': 9,
  'S': 1,
  'T': 2,
  'U': 3, 'Ú': 3, 'Ù': 3, 'Ủ': 3, 'Ũ': 3, 'Ụ': 3,
  'Ư': 3, 'Ứ': 3, 'Ừ': 3, 'Ử': 3, 'Ữ': 3, 'Ự': 3,
  'V': 4,
  'W': 5,
  'X': 6,
  'Y': 7, 'Ý': 7, 'Ỳ': 7, 'Ỷ': 7, 'Ỹ': 7, 'Ỵ': 7,
  'Z': 8
};

// Thông tin chi tiết về từng con số chủ đạo - Phiên bản nâng cao
const LIFE_PATH_MEANINGS = {
  1: {
    title: "Số 1 - Người Tiên Phong (The Pioneer)",
    subtitle: "Thần số của sự khởi đầu và lãnh đạo",
    personality: "Là người tiên phong thiên bẩm, luôn muốn dẫn đầu và tạo ra những điều mới mẻ. Có khả năng lãnh đạo xuất sắc, độc lập và quyết đoán. Thích làm việc một mình hơn là trong nhóm, có xu hướng dominance và không thích bị kiểm soát.",
    deep_traits: {
      core_essence: "Năng lượng khởi đầu, sự độc lập tuyệt đối",
      life_mission: "Tạo ra những con đường mới, dẫn dắt người khác đi theo",
      spiritual_lesson: "Học cách cân bằng giữa cái tôi và lợi ích chung",
      karmic_debt: "Khắc phục tính ích kỷ và học cách hợp tác"
    },
    strengths: ["Lãnh đạo thiên bẩm", "Sáng tạo đột phá", "Quyết đoán nhanh chóng", "Độc lập tuyệt đối", "Tinh thần tiên phong", "Tự tin vượt trội", "Khả năng khởi nghiệp", "Tầm nhìn xa"],
    weaknesses: ["Ích kỷ và tự cao", "Bướng bỉnh cố chấp", "Thiếu kiên nhẫn", "Áp đặt ý kiến", "Khó hợp tác", "Cô đơn trong lãnh đạo", "Stress từ áp lực thành công", "Xu hướng độc tài"],
    career_detailed: {
      best_careers: ["CEO/Giám đốc điều hành", "Doanh nhân khởi nghiệp", "Chính trị gia", "Nhà phát minh", "Kiến trúc sư trưởng", "Đạo diễn phim", "Nhà thiết kế thời trang", "Luật sư hàng đầu"],
      avoid_careers: ["Nhân viên hành chính", "Kế toán viên", "Thư ký", "Công việc lặp đi lặp lại"],
      work_style: "Thích làm sếp hơn làm nhân viên, cần môi trường tự do sáng tạo"
    },
    love_relationships: {
      love_style: "Mạnh mẽ, quyết đoán, thích chinh phục và bảo vệ",
      ideal_partner: "Số 2 (hỗ trợ), Số 3 (sáng tạo), Số 5 (tự do)",
      challenges: "Khó thể hiện cảm xúc, xu hướng chi phối người yêu",
      marriage_advice: "Cần học cách chia sẻ quyết định và tôn trọng ý kiến đối phương"
    },
    health_tendencies: {
      physical: ["Hệ tim mạch (do stress)", "Đau đầu migraine", "Huyết áp cao", "Vấn đề về xương khớp"],
      mental: ["Stress do áp lực thành công", "Anxiety khi mất kiểm soát", "Burnout từ làm việc quá sức"],
      healing_methods: ["Meditation lãnh đạo", "Thể thao cá nhân", "Yoga power", "Massage thư giãn"]
    },
    lucky_numbers: [1, 10, 19, 28, 37, 46, 55],
    unlucky_numbers: [2, 7, 16, 25],
    lucky_colors: ["Đỏ ruby", "Cam rực", "Vàng hoàng gia", "Trắng tinh khiết"],
    lucky_stones: ["Ruby", "Garnet", "Carnelian", "Citrine", "Kim cương"],
    lucky_days: ["Chủ nhật", "Thứ hai"],
    lucky_months: ["Tháng 1", "Tháng 10"],
    feng_shui: {
      directions: ["Đông", "Đông Nam"],
      elements: ["Hỏa", "Mộc"],
      room_setup: "Văn phòng riêng, ghế ngồi quay lưng về tường, bàn làm việc hướng cửa"
    },
    life_cycles: {
      "0-28": "Giai đoạn hình thành tính cách lãnh đạo",
      "29-56": "Thời kỳ hoàng kim của sự nghiệp",
      "57+": "Giai đoạn truyền đạt kinh nghiệm cho thế hệ sau"
    },
    famous_people: ["Steve Jobs", "Martin Luther King Jr.", "Napoleon Bonaparte", "Tom Hanks", "Lady Gaga"],
    advice: "Học cách lắng nghe và chia sẻ quyền lực. Sự thành công thật sự đến khi bạn có thể nâng đỡ người khác cùng thành công.",
    meditation_mantra: "Tôi dẫn dắt với tình yêu và khôn ngoan",
    life_purpose: "Tạo ra những con đường mới và truyền cảm hứng cho người khác theo đuổi ước mơ của họ"
  },
  2: {
    title: "Số 2 - Người Hòa Hợp (The Cooperator)",
    subtitle: "Thần số của sự hòa hợp và hỗ trợ",
    personality: "Là người sinh ra để hợp tác và tạo dựng sự hòa hợp. Có trực giác nhạy bén, khả năng đồng cảm cao và luôn đặt nhu cầu của người khác lên trước. Thích làm việc nhóm hơn cạnh tranh cá nhân.",
    deep_traits: {
      core_essence: "Năng lượng hòa hợp và cân bằng",
      life_mission: "Tạo dựng sự kết nối và hỗ trợ lẫn nhau",
      spiritual_lesson: "Học cách tin tưởng vào bản thân và không phụ thuộc quá mức",
      karmic_debt: "Vượt qua nỗi sợ xung đột và học cách đứng lên cho chính mình"
    },
    strengths: ["Đồng cảm sâu sắc", "Hòa giải xuất sắc", "Trực giác nhạy bén", "Kiên nhẫn vô hạn", "Hỗ trợ tận tâm", "Diplomacy tự nhiên", "Lắng nghe tuyệt vời", "Cảm nhận năng lượng"],
    weaknesses: ["Thiếu tự tin bẩm sinh", "Sợ xung đột", "Quá phụ thuộc", "Hay lo lắng thái quá", "Khó đưa ra quyết định", "Dễ bị tổn thương", "Tránh né trách nhiệm", "Nhạy cảm quá mức"],
    career_detailed: {
      best_careers: ["Nhà ngoại giao", "Tư vấn tâm lý", "Y tá/Bác sĩ", "Giáo viên mầm non", "Nhân viên xã hội", "Nhà thiết kế nội thất", "Nhạc sĩ/Nghệ sĩ", "Hòa giải viên"],
      avoid_careers: ["Sales áp lực cao", "Quản lý độc đoán", "Công việc cạnh tranh gay gắt"],
      work_style: "Thích môi trường hợp tác, cần được đánh giá và động viên thường xuyên"
    },
    love_relationships: {
      love_style: "Tận tụy, hy sinh, luôn đặt người yêu lên hàng đầu",
      ideal_partner: "Số 1 (bảo vệ), Số 4 (ổn định), Số 8 (mạnh mẽ)",
      challenges: "Dễ mất bản thân trong tình yêu, sợ bị từ chối",
      marriage_advice: "Học cách yêu bản thân trước khi yêu người khác"
    },
    health_tendencies: {
      physical: ["Hệ tiêu hóa (do lo lắng)", "Rối loạn giấc ngủ", "Đau đầu căng thẳng", "Vấn đề về da"],
      mental: ["Lo âu xã hội", "Depression nhẹ", "Stress từ mối quan hệ", "Panic attacks"],
      healing_methods: ["Yoga thư giãn", "Thiền chánh niệm", "Aromatherapy", "Tắm thảo dược"]
    },
    lucky_numbers: [2, 11, 20, 29, 38, 47, 56],
    unlucky_numbers: [1, 8, 17, 26],
    lucky_colors: ["Xanh dương nhạt", "Bạc ánh trăng", "Trắng ngọc trai", "Hồng pastel"],
    lucky_stones: ["Moonstone", "Pearl", "Aquamarine", "Rose Quartz", "Opal"],
    lucky_days: ["Thứ hai", "Thứ sáu"],
    lucky_months: ["Tháng 2", "Tháng 11"],
    feng_shui: {
      directions: ["Tây", "Tây Nam"],
      elements: ["Thủy", "Kim"],
      room_setup: "Không gian mở, nhiều cây xanh, ánh sáng dịu nhẹ"
    },
    life_cycles: {
      "0-28": "Giai đoạn tìm kiếm bản thân và tự tin",
      "29-56": "Thời kỳ phát triển tài năng hỗ trợ và hòa giải",
      "57+": "Giai đoạn trở thành người cố vấn tâm linh"
    },
    famous_people: ["Mother Teresa", "Gandhi", "Jennifer Lopez", "Ronald Reagan"],
    advice: "Hãy tin tưởng vào trực giác của mình và đừng sợ đứng lên cho những gì mình tin tưởng",
    meditation_mantra: "Tôi cân bằng và hòa hợp với vũ trụ",
    life_purpose: "Tạo dựng cầu nối giữa con người và mang lại hòa bình cho thế giới"
  },

  3: {
    title: "Số 3 - Người Sáng Tạo (The Creative Communicator)",
    subtitle: "Thần số của nghệ thuật và giao tiếp",
    personality: "Là nghệ sĩ thiên bẩm với khả năng sáng tạo vô hạn. Có năng khiếu giao tiếp xuất sắc, luôn mang đến niềm vui và cảm hứng cho người khác. Tính cách lạc quan, yêu đời và có khả năng biến ước mơ thành hiện thực.",
    deep_traits: {
      core_essence: "Năng lượng sáng tạo và biểu đạt",
      life_mission: "Truyền cảm hứng và mang vẻ đẹp đến thế giới",
      spiritual_lesson: "Học cách tập trung và kiên trì hoàn thành mục tiêu",
      karmic_debt: "Vượt qua sự phân tán và học cách sử dụng tài năng một cách có ý thức"
    },
    strengths: ["Sáng tạo thiên bẩm", "Giao tiếp xuất sắc", "Lạc quan tự nhiên", "Truyền cảm hứng", "Khiếu hài hước", "Biểu đạt nghệ thuật", "Charisma mạnh mẽ", "Tưởng tượng phong phú"],
    weaknesses: ["Dễ phân tán", "Thiếu kỷ luật", "Sống theo cảm xúc", "Khó hoàn thành dự án", "Tiêu tiền bốc đồng", "Tránh né trách nhiệm", "Mood swings", "Thiếu thực tế"],
    career_detailed: {
      best_careers: ["Nghệ sĩ/Họa sĩ", "Nhà văn/Nhà báo", "Diễn viên/Ca sĩ", "Nhà thiết kế", "Photographer", "Marketing creative", "Giáo viên nghệ thuật", "Event organizer"],
      avoid_careers: ["Kế toán chi tiết", "Công việc kỹ thuật khô khan", "Quản lý hành chính"],
      work_style: "Cần môi trường sáng tạo tự do, deadline linh hoạt"
    },
    love_relationships: {
      love_style: "Lãng mạn, đam mê, thích tạo bất ngờ và thể hiện tình cảm",
      ideal_partner: "Số 1 (ủng hộ), Số 5 (phiêu lưu), Số 7 (sâu sắc)",
      challenges: "Dễ chán trong mối quan hệ dài hạn, cần không gian sáng tạo",
      marriage_advice: "Tìm người bạn đời có thể chia sẻ đam mê nghệ thuật"
    },
    health_tendencies: {
      physical: ["Vấn đề về họng/giọng nói", "Stress do tâm trạng thay đổi", "Rối loạn ăn uống", "Đau lưng"],
      mental: ["Bipolar tendencies", "Creativity blocks", "Social anxiety", "Overthinking"],
      healing_methods: ["Art therapy", "Music therapy", "Dancing", "Color therapy"]
    },
    lucky_numbers: [3, 12, 21, 30, 39, 48, 57],
    unlucky_numbers: [4, 8, 13, 22],
    lucky_colors: ["Vàng rực rỡ", "Cam sáng", "Tím hoàng gia", "Hồng magenta"],
    lucky_stones: ["Citrine", "Amethyst", "Sunstone", "Carnelian", "Topaz"],
    lucky_days: ["Thứ tư", "Thứ năm"],
    lucky_months: ["Tháng 3", "Tháng 12"],
    feng_shui: {
      directions: ["Nam", "Đông Nam"],
      elements: ["Hỏa", "Mộc"],
      room_setup: "Studio nghệ thuật, nhiều màu sắc, ánh sáng tự nhiên"
    },
    life_cycles: {
      "0-28": "Khám phá và phát triển tài năng nghệ thuật",
      "29-56": "Thời kỳ thể hiện và thu hoạch thành công sáng tạo",
      "57+": "Giai đoạn truyền đạt nghệ thuật cho thế hệ sau"
    },
    famous_people: ["Walt Disney", "Jim Carrey", "Oprah Winfrey", "Salvador Dalí"],
    advice: "Tập trung vào một dự án tại một thời điểm và học cách kiên trì đến cùng",
    meditation_mantra: "Tôi thể hiện sự sáng tạo với mục đích cao đẹp",
    life_purpose: "Mang vẻ đẹp, niềm vui và cảm hứng đến cuộc sống của mọi người"
  },
  4: {
    title: "Số 4 - Người Kiến Tạo (The Builder)",
    subtitle: "Thần số của sự ổn định và xây dựng",
    personality: "Là người xây dựng thiên bẩm, có khả năng biến ý tưởng thành hiện thực một cách thể hệ và bền vững. Cực kỳ thực tế, đáng tin cậy và có kỷ luật cao. Thích sự ổn định và trật tự hơn là sự thay đổi.",
    deep_traits: {
      core_essence: "Năng lượng xây dựng và ổn định",
      life_mission: "Tạo dựng nền tảng vững chắc cho tương lai",
      spiritual_lesson: "Học cách linh hoạt và chấp nhận thay đổi",
      karmic_debt: "Vượt qua sự cứng nhắc và mở lòng với những khả năng mới"
    },
    strengths: ["Kỷ luật sắt đá", "Đáng tin cậy tuyệt đối", "Tổ chức xuất sắc", "Làm việc chăm chỉ", "Kiên trì bền bỉ", "Quản lý tài chính giỏi", "Thực tế và logic", "Tập trung cao độ"],
    weaknesses: ["Cứng nhắc cố chấp", "Chậm thích ứng", "Quá thận trọng", "Thiếu sự linh hoạt", "Stress từ hoàn hảo chủ nghĩa", "Khó thể hiện cảm xúc", "Sợ rủi ro", "Workaholic"],
    career_detailed: {
      best_careers: ["Kỹ sư xây dựng", "Kiến trúc sư", "Kế toán trưởng", "Project Manager", "Quản lý ngân hàng", "Luật sư doanh nghiệp", "Nhà quy hoạch đô thị", "Chuyên gia logistics"],
      avoid_careers: ["Nghệ thuật tự do", "Sales không ổn định", "Công việc thay đổi thường xuyên"],
      work_style: "Cần môi trường có quy trình rõ ràng, mục tiêu dài hạn"
    },
    love_relationships: {
      love_style: "Trung thành, cam kết lâu dài, thể hiện tình yêu qua hành động",
      ideal_partner: "Số 2 (hỗ trợ), Số 6 (gia đình), Số 8 (thành công)",
      challenges: "Khó bộc lộ cảm xúc, quá tập trung vào công việc",
      marriage_advice: "Dành thời gian chất lượng cho gia đình và học cách lãng mạn"
    },
    health_tendencies: {
      physical: ["Vấn đề xương khớp", "Đau lưng mạn tính", "Huyết áp", "Stress cơ bắp"],
      mental: ["Depression từ áp lực", "Anxiety về tài chính", "Workaholism", "Perfectionist stress"],
      healing_methods: ["Massage thể thao", "Yoga stretching", "Hiking", "Garden therapy"]
    },
    lucky_numbers: [4, 13, 22, 31, 40, 49, 58],
    unlucky_numbers: [3, 5, 14, 23],
    lucky_colors: ["Nâu đất", "Xanh lá đậm", "Xám kim loại", "Be tự nhiên"],
    lucky_stones: ["Emerald", "Jade", "Hematite", "Smoky Quartz", "Moss Agate"],
    lucky_days: ["Thứ bảy", "Chủ nhật"],
    lucky_months: ["Tháng 4", "Tháng 8"],
    feng_shui: {
      directions: ["Tây Nam", "Đông Bắc"],
      elements: ["Thổ", "Kim"],
      room_setup: "Bàn làm việc chắc chắn, tủ tài liệu ngăn nắp, màu sắc trung tính"
    },
    life_cycles: {
      "0-28": "Giai đoạn học hỏi kỹ năng và xây dựng nền tảng",
      "29-56": "Thời kỳ thu hoạch thành quả từ sự kiên trì",
      "57+": "Giai đoạn để lại di sản và truyền đạt kinh nghiệm"
    },
    famous_people: ["Bill Gates", "Oprah Winfrey", "Frank Lloyd Wright", "Clint Eastwood"],
    advice: "Học cách linh hoạt và đừng sợ thay đổi khi cần thiết",
    meditation_mantra: "Tôi xây dựng với tình yêu và khôn ngoan",
    life_purpose: "Tạo dựng những nền tảng vững chắc giúp xã hội phát triển bền vững"
  },

  5: {
    title: "Số 5 - Người Tự Do (The Freedom Seeker)",
    subtitle: "Thần số của tự do và phiêu lưu",
    personality: "Là linh hồn tự do không thể bị trói buộc. Có khao khát khám phá thế giới và trải nghiệm mọi điều mới mẻ. Năng động, thích thay đổi và có khả năng thích ứng nhanh chóng với mọi hoàn cảnh.",
    deep_traits: {
      core_essence: "Năng lượng tự do và khám phá",
      life_mission: "Trải nghiệm cuộc sống đầy đủ nhất và truyền cảm hứng phiêu lưu",
      spiritual_lesson: "Học cách cam kết và chấp nhận trách nhiệm",
      karmic_debt: "Vượt qua sự thiếu kiên nhẫn và học cách hoàn thành những gì đã bắt đầu"
    },
    strengths: ["Thích ứng cực nhanh", "Năng động vô hạn", "Tò mò khám phá", "Giao tiếp đa ngôn ngữ", "Linh hoạt tuyệt đối", "Tinh thần phiêu lưu", "Tư duy đột phá", "Charisma tự nhiên"],
    weaknesses: ["Thiếu kiên nhẫn", "Không thích cam kết", "Bất ổn trong công việc", "Tiêu tiền bốc đồng", "Dễ chán nản", "Tránh trách nhiệm", "Stress từ ràng buộc", "Khó tập trung lâu"],
    career_detailed: {
      best_careers: ["Travel blogger", "Phóng viên quốc tế", "Phi công", "Tour guide", "Freelancer", "Trader", "Event planner", "Dịch thuật viên"],
      avoid_careers: ["Công việc văn phòng cố định", "Kế toán chi tiết", "Quản lý hành chính"],
      work_style: "Cần tự do thời gian, đa dạng nhiệm vụ, làm việc từ xa"
    },
    love_relationships: {
      love_style: "Đam mê, phiêu lưu, thích khám phá cùng đối phương",
      ideal_partner: "Số 1 (mạnh mẽ), Số 3 (sáng tạo), Số 7 (độc lập)",
      challenges: "Sợ cam kết, cần không gian cá nhân lớn",
      marriage_advice: "Tìm người cùng chí hướng phiêu lưu và hiểu được nhu cầu tự do"
    },
    health_tendencies: {
      physical: ["Chấn thương từ hoạt động mạo hiểm", "Vấn đề về hệ thần kinh", "Rối loạn giấc ngủ", "Vấn đề về hô hấp"],
      mental: ["ADHD tendencies", "Restlessness", "Commitment anxiety", "Wanderlust depression"],
      healing_methods: ["Extreme sports", "Travel therapy", "Adventure meditation", "Outdoor activities"]
    },
    lucky_numbers: [5, 14, 23, 32, 41, 50, 59],
    unlucky_numbers: [2, 4, 13, 22],
    lucky_colors: ["Xanh dương biển", "Bạc thủy ngân", "Đỏ rực", "Vàng ánh kim"],
    lucky_stones: ["Aquamarine", "Turquoise", "Aventurine", "Lapis Lazuli", "Sapphire"],
    lucky_days: ["Thứ tư", "Thứ sáu"],
    lucky_months: ["Tháng 5", "Tháng 9"],
    feng_shui: {
      directions: ["Tây", "Bắc"],
      elements: ["Kim", "Thủy"],
      room_setup: "Không gian mở, đồ du lịch, bản đồ thế giới"
    },
    life_cycles: {
      "0-28": "Giai đoạn khám phá và trải nghiệm",
      "29-56": "Thời kỳ sử dụng kinh nghiệm để tạo giá trị",
      "57+": "Giai đoạn chia sẻ trí tuệ từ những cuộc phiêu lưu"
    },
    famous_people: ["Angelina Jolie", "Vincent van Gogh", "Abraham Lincoln", "Steven Spielberg"],
    advice: "Học cách cam kết với những điều thực sự quan trọng mà không mất đi sự tự do",
    meditation_mantra: "Tôi tự do trong tình yêu và trách nhiệm",
    life_purpose: "Khám phá thế giới và mở rộng tầm nhìn cho nhân loại"
  },
  6: {
    title: "Số 6 - Người Nuôi Dưỡng (The Nurturer)",
    subtitle: "Thần số của tình yêu và chăm sóc",
    personality: "Là mẹ/cha thiên bẩm của nhân loại, có trái tim nhân ái và khao khát chăm sóc mọi người xung quanh. Có khả năng tạo dựng không gian ấm cúng và hòa hợp. Đặt gia đình và cộng đồng lên hàng đầu.",
    deep_traits: {
      core_essence: "Năng lượng yêu thương và chăm sóc",
      life_mission: "Tạo dựng tình yêu và sự hòa hợp trong gia đình và cộng đồng",
      spiritual_lesson: "Học cách chăm sóc bản thân và đặt ranh giới khỏe mạnh",
      karmic_debt: "Vượt qua việc hi sinh quá mức và học cách nhận lại tình yêu"
    },
    strengths: ["Tình yêu vô điều kiện", "Chăm sóc tận tụy", "Tạo hòa hợp", "Trách nhiệm cao", "Đồng cảm sâu sắc", "Nghệ thuật trang trí", "Nấu ăn xuất sắc", "Chữa lành cảm xúc"],
    weaknesses: ["Hi sinh quá mức", "Can thiệp thái quá", "Hay lo lắng cho người khác", "Perfectionist trong gia đình", "Stress từ việc làm hài lòng mọi người", "Bỏ bê bản thân", "Codependency", "Cảm giác tội lỗi"],
    career_detailed: {
      best_careers: ["Giáo viên", "Y tá/Bác sĩ", "Tư vấn gia đình", "Nhà thiết kế nội thất", "Chef", "Nhà trị liệu", "Social worker", "Veterinarian"],
      avoid_careers: ["Công việc đòi hỏi tính cạnh tranh cao", "Sales áp lực", "Quản lý khắt khe"],
      work_style: "Cần môi trường hòa hợp, tập trung vào phục vụ người khác"
    },
    love_relationships: {
      love_style: "Tận tụy, chăm sóc, luôn đặt gia đình lên hàng đầu",
      ideal_partner: "Số 1 (bảo vệ), Số 2 (hòa hợp), Số 9 (nhân đạo)",
      challenges: "Quá chăm sóc khiến đối phương cảm thấy áp lực",
      marriage_advice: "Học cách yêu bản thân và để đối phương có không gian riêng"
    },
    health_tendencies: {
      physical: ["Vấn đề về tim (do stress cảm xúc)", "Đau lưng", "Vấn đề về tử cung/sinh sản", "Béo phì do ăn uống cảm xúc"],
      mental: ["Anxiety về gia đình", "Depression từ việc bị từ chối", "Caregiver burnout", "Guilt complex"],
      healing_methods: ["Family therapy", "Self-care rituals", "Gardening", "Cooking therapy"]
    },
    lucky_numbers: [6, 15, 24, 33, 42, 51, 60],
    unlucky_numbers: [1, 5, 14, 23],
    lucky_colors: ["Hồng ấm áp", "Xanh lá nhạt", "Xanh dương êm dịu", "Vàng mật ong"],
    lucky_stones: ["Rose Quartz", "Green Aventurine", "Chrysocolla", "Prehnite", "Rhodonite"],
    lucky_days: ["Thứ năm", "Thứ sáu"],
    lucky_months: ["Tháng 6", "Tháng 9"],
    feng_shui: {
      directions: ["Nam", "Tây Nam"],
      elements: ["Hỏa", "Thổ"],
      room_setup: "Không gian gia đình ấm cúng, nhiều ảnh gia đình, cây xanh"
    },
    life_cycles: {
      "0-28": "Giai đoạn học cách yêu thương và chăm sóc",
      "29-56": "Thời kỳ tận hiến cho gia đình và cộng đồng",
      "57+": "Giai đoạn trở thành người cố vấn tâm linh cho nhiều gia đình"
    },
    famous_people: ["Mother Teresa", "Eleanor Roosevelt", "Stevie Wonder", "John Lennon"],
    advice: "Hãy nhớ chăm sóc bản thân trước khi chăm sóc người khác",
    meditation_mantra: "Tôi yêu thương một cách cân bằng và khôn ngoan",
    life_purpose: "Tạo dựng tình yêu, sự hòa hợp và chữa lành trong thế giới"
  },

  7: {
    title: "Số 7 - Người Tìm Kiếm Chân Lý (The Spiritual Seeker)",
    subtitle: "Thần số của trí tuệ và tâm linh",
    personality: "Là nhà triết học thiên bẩm, luôn tìm kiếm ý nghĩa sâu xa của cuộc sống. Có trực giác mạnh mẽ, khả năng phân tích sâu sắc và khao khát hiểu biết về những bí ẩn của vũ trụ. Thích sự yên tĩnh và không gian riêng tư.",
    deep_traits: {
      core_essence: "Năng lượng trí tuệ và tâm linh",
      life_mission: "Tìm kiếm và chia sẻ chân lý, trí tuệ",
      spiritual_lesson: "Học cách kết nối với người khác và chia sẻ kiến thức",
      karmic_debt: "Vượt qua sự cô lập và học cách tin tưởng vào intuition"
    },
    strengths: ["Trực giác siêu việt", "Phân tích sâu sắc", "Trí tuệ tâm linh", "Độc lập tư duy", "Nghiên cứu chuyên sâu", "Khả năng thiền định", "Nhận thức cao", "Tìm kiếm chân lý"],
    weaknesses: ["Cô lập xã hội", "Hoài nghi quá mức", "Khó gần", "Overthinking", "Perfectionist trong tư duy", "Stress từ việc tìm kiếm hoàn hảo", "Khó thể hiện cảm xúc", "Phản ứng chậm"],
    career_detailed: {
      best_careers: ["Nhà nghiên cứu", "Giáo sư đại học", "Nhà tâm lý học", "Nhà khoa học", "Nhà văn triết học", "Astrologer", "Therapist", "Data analyst"],
      avoid_careers: ["Sales trực tiếp", "Công việc đòi hỏi tương tác xã hội cao", "Quản lý nhân sự"],
      work_style: "Cần không gian riêng tư, thời gian tư duy, ít meeting"
    },
    love_relationships: {
      love_style: "Sâu sắc, tâm linh, cần kết nối ở level tinh thần",
      ideal_partner: "Số 3 (sáng tạo), Số 5 (tự do), Số 7 (hiểu nhau)",
      challenges: "Khó mở lòng, cần quá nhiều không gian cá nhân",
      marriage_advice: "Tìm người hiểu và tôn trọng nhu cầu tâm linh của bạn"
    },
    health_tendencies: {
      physical: ["Vấn đề về mắt", "Đau đầu migraine", "Vấn đề về hệ thần kinh", "Rối loạn tiêu hóa do stress"],
      mental: ["Social anxiety", "Depression", "Existential crisis", "Insomnia từ overthinking"],
      healing_methods: ["Meditation", "Yoga", "Forest bathing", "Reading therapy"]
    },
    lucky_numbers: [7, 16, 25, 34, 43, 52, 61],
    unlucky_numbers: [2, 6, 15, 24],
    lucky_colors: ["Tím đậm", "Xanh dương đậm", "Bạc ánh trăng", "Trắng tinh khiết"],
    lucky_stones: ["Amethyst", "Labradorite", "Clear Quartz", "Sodalite", "Fluorite"],
    lucky_days: ["Thứ hai", "Thứ bảy"],
    lucky_months: ["Tháng 7", "Tháng 11"],
    feng_shui: {
      directions: ["Bắc", "Đông Bắc"],
      elements: ["Thủy", "Thổ"],
      room_setup: "Thư viện riêng, góc thiền, ánh sáng dịu nhẹ"
    },
    life_cycles: {
      "0-28": "Giai đoạn khám phá và tìm kiếm ý nghĩa",
      "29-56": "Thời kỳ nghiên cứu sâu và phát triển trí tuệ",
      "57+": "Giai đoạn trở thành thầy dạy tâm linh"
    },
    famous_people: ["Einstein", "Nikola Tesla", "Stephen Hawking", "Marilyn Monroe"],
    advice: "Hãy chia sẻ trí tuệ của mình với thế giới và không sợ kết nối với người khác",
    meditation_mantra: "Tôi tin tưởng vào trực giác và chia sẻ trí tuệ",
    life_purpose: "Tìm kiếm chân lý và giúp nhân loại hiểu sâu hơn về bản chất cuộc sống"
  },
  8: {
    title: "Số 8 - Người Thành Đạt (The Material Master)",
    subtitle: "Thần số của quyền lực và thành công vật chất",
    personality: "Là nhà lãnh đạo kinh doanh thiên bẩm với tham vọng và khả năng biến ý tưởng thành tài sản thực tế. Có khả năng quản lý tài chính xuất sắc và tầm nhìn kinh doanh sắc bén. Thích quyền lực và địa vị xã hội.",
    deep_traits: {
      core_essence: "Năng lượng quyền lực và thành đạt",
      life_mission: "Tạo dựng thành công vật chất và sử dụng quyền lực một cách có trách nhiệm",
      spiritual_lesson: "Học cách cân bằng giữa vật chất và tinh thần",
      karmic_debt: "Vượt qua lòng tham và học cách chia sẻ thành công"
    },
    strengths: ["Tầm nhìn kinh doanh", "Quản lý tài chính xuất sắc", "Khả năng lãnh đạo", "Tham vọng lớn", "Quyết đoán trong kinh doanh", "Tổ chức hiệu quả", "Bền bỉ với mục tiêu", "Khả năng tạo dựng đế chế"],
    weaknesses: ["Tham lam quyền lực", "Quá tập trung vào tiền bạc", "Áp đặt và độc đoán", "Thiếu cảm xúc", "Stress từ áp lực thành công", "Bỏ bê gia đình", "Workaholic cực độ", "Khó tin tưởng người khác"],
    career_detailed: {
      best_careers: ["CEO doanh nghiệp", "Banker/Financier", "Real Estate Mogul", "Entrepreneur", "Corporate Lawyer", "Investment Advisor", "Business Consultant", "Executive Producer"],
      avoid_careers: ["Nghệ thuật tự do", "Công việc xã hội", "Giáo viên tiểu học"],
      work_style: "Cần quyền quyết định, mục tiêu tài chính rõ ràng, đội ngũ hỗ trợ mạnh"
    },
    love_relationships: {
      love_style: "Thể hiện tình yêu qua việc bảo vệ và cung cấp tài chính",
      ideal_partner: "Số 2 (hỗ trợ), Số 4 (ổn định), Số 6 (gia đình)",
      challenges: "Quá bận rộn với công việc, khó bộc lộ cảm xúc",
      marriage_advice: "Dành thời gian chất lượng cho gia đình và học cách thể hiện tình cảm"
    },
    health_tendencies: {
      physical: ["Bệnh tim do stress", "Huyết áp cao", "Đau dạ dày", "Vấn đề về gan"],
      mental: ["Stress từ áp lực tài chính", "Anxiety về thành công", "Depression khi thất bại", "Burnout syndrome"],
      healing_methods: ["Executive coaching", "Luxury spa treatments", "Golf therapy", "Financial planning meditation"]
    },
    lucky_numbers: [8, 17, 26, 35, 44, 53, 62],
    unlucky_numbers: [3, 7, 16, 25],
    lucky_colors: ["Đen sang trọng", "Xám bạc", "Nâu đậm", "Vàng kim"],
    lucky_stones: ["Black Onyx", "Hematite", "Pyrite", "Tiger's Eye", "Garnet"],
    lucky_days: ["Thứ bảy", "Chủ nhật"],
    lucky_months: ["Tháng 8", "Tháng 12"],
    feng_shui: {
      directions: ["Đông Bắc", "Tây Nam"],
      elements: ["Thổ", "Kim"],
      room_setup: "Văn phòng executive, màu sắc sang trọng, biểu tượng thành công"
    },
    life_cycles: {
      "0-28": "Giai đoạn học kinh doanh và xây dựng nền tảng tài chính",
      "29-56": "Thời kỳ hoàng kim của thành công và quyền lực",
      "57+": "Giai đoạn từ thiện và để lại di sản"
    },
    famous_people: ["Donald Trump", "Warren Buffett", "Oprah Winfrey", "Pablo Picasso"],
    advice: "Sử dụng thành công của mình để tạo ra giá trị tích cực cho xã hội",
    meditation_mantra: "Tôi tạo ra thành công để phục vụ mục đích cao đẹp",
    life_purpose: "Tạo dựng thành công vật chất và sử dụng quyền lực để làm cho thế giới tốt đẹp hơn"
  },

  9: {
    title: "Số 9 - Người Nhân Đạo (The Universal Humanitarian)",
    subtitle: "Thần số của tình yêu toàn cầu và hoàn thiện",
    personality: "Là linh hồn cao đẹp nhất với tình yêu thương vô bờ bến dành cho nhân loại. Có khả năng nhìn thấy bức tranh toàn cảnh của cuộc sống và luôn hướng tới việc làm cho thế giới tốt đẹp hơn. Đã trải qua tất cả các bài học từ số 1-8.",
    deep_traits: {
      core_essence: "Năng lượng tình yêu toàn cầu và hoàn thiện",
      life_mission: "Phục vụ nhân loại và nâng cao ý thức toàn cầu",
      spiritual_lesson: "Học cách buông bỏ và tin tưởng vào quá trình của vũ trụ",
      karmic_debt: "Vượt qua việc mang quá nhiều gánh nặng của thế giới"
    },
    strengths: ["Tình yêu vô điều kiện", "Tầm nhìn toàn cầu", "Trí tuệ siêu việt", "Khả năng chữa lành", "Nghệ thuật cao cấp", "Trực giác mạnh mẽ", "Khoan dung rộng lượng", "Sự hy sinh cao đẹp"],
    weaknesses: ["Quá lý tưởng hóa", "Dễ bị tổn thương", "Thiếu thực tế", "Mang quá nhiều gánh nặng", "Khó kiếm tiền", "Cảm xúc thất thường", "Xu hướng hy sinh quá mức", "Stress từ việc cứu thế giới"],
    career_detailed: {
      best_careers: ["Nhà từ thiện", "Nghệ sĩ quốc tế", "Giáo viên tâm linh", "Doctor Without Borders", "Environmental Activist", "International Diplomat", "Humanitarian Worker", "Spiritual Healer"],
      avoid_careers: ["Công việc chỉ vì tiền", "Ngành công nghiệp có hại", "Công việc ích kỷ"],
      work_style: "Cần ý nghĩa sâu sắc, tác động tích cực đến xã hội"
    },
    love_relationships: {
      love_style: "Yêu thương toàn cầu, khó tập trung vào một người",
      ideal_partner: "Số 6 (chăm sóc), Số 3 (sáng tạo), Số 9 (hiểu nhau)",
      challenges: "Quá bận rộn với việc cứu thế giới, khó cam kết cá nhân",
      marriage_advice: "Tìm người cùng chí hướng và hiểu được sứ mệnh của bạn"
    },
    health_tendencies: {
      physical: ["Vấn đề về tim (cảm xúc)", "Hệ miễn dịch yếu", "Mệt mỏi mạn tính", "Vấn đề về máu"],
      mental: ["Depression từ tình trạng thế giới", "Compassion fatigue", "Existential anxiety", "Empath overwhelm"],
      healing_methods: ["Global meditation", "Art therapy", "Service to others", "Nature connection"]
    },
    lucky_numbers: [9, 18, 27, 36, 45, 54, 63],
    unlucky_numbers: [4, 8, 13, 22],
    lucky_colors: ["Vàng thánh", "Cam rực", "Đỏ ruby", "Tím hoàng gia"],
    lucky_stones: ["Citrine", "Ruby", "Carnelian", "Amber", "Fire Opal"],
    lucky_days: ["Thứ ba", "Thứ năm"],
    lucky_months: ["Tháng 9", "Tháng 12"],
    feng_shui: {
      directions: ["Nam", "Đông"],
      elements: ["Hỏa", "Mộc"],
      room_setup: "Không gian mở, nhiều ánh sáng, biểu tượng hòa bình thế giới"
    },
    life_cycles: {
      "0-28": "Giai đoạn nhận thức về sứ mệnh nhân đạo",
      "29-56": "Thời kỳ phục vụ tích cực cho nhân loại",
      "57+": "Giai đoạn trở thành guru tâm linh"
    },
    famous_people: ["Mother Teresa", "Mahatma Gandhi", "Nelson Mandela", "Bob Marley"],
    advice: "Hãy nhớ chăm sóc bản thân để có thể phục vụ người khác lâu dài",
    meditation_mantra: "Tôi yêu thương và phục vụ với tình yêu vô điều kiện",
    life_purpose: "Nâng cao ý thức toàn cầu và giúp nhân loại tiến hóa về mặt tâm linh"
  },
  11: {
    title: "Số 11 - Người Truyền Cảm Hứng (The Spiritual Messenger)",
    subtitle: "Master Number - Thần số của trực giác và cảm hứng tâm linh",
    personality: "Là kênh truyền dẫn năng lượng tâm linh với trực giác siêu việt và khả năng truyền cảm hứng mạnh mẽ. Có sứ mệnh cao đẹp là cầu nối giữa thế giới vật chất và tinh thần. Sống ở tần số năng lượng cao hơn người thường.",
    deep_traits: {
      core_essence: "Năng lượng trực giác và cảm hứng tâm linh",
      life_mission: "Truyền cảm hứng tâm linh và nâng cao ý thức tập thể",
      spiritual_lesson: "Học cách kiểm soát năng lượng nhạy cảm và sử dụng gifts một cách có ý thức",
      karmic_debt: "Cân bằng giữa thế giới tâm linh và vật chất"
    },
    strengths: ["Trực giác siêu phàm", "Khả năng nhìn thấy tương lai", "Cảm hứng mạnh mẽ", "Charisma tâm linh", "Khả năng chữa lành", "Telepathy tự nhiên", "Visionary thinking", "Magnetic personality"],
    weaknesses: ["Quá nhạy cảm", "Nervous system quá tải", "Khó sống trong thực tế", "Mood swings nghiêm trọng", "Anxiety attacks", "Cảm giác cô đơn", "Perfectionist tâm linh", "Energy drain"],
    career_detailed: {
      best_careers: ["Spiritual Teacher", "Psychic/Medium", "Inspirational Speaker", "Healer/Therapist", "Artist/Musician", "Life Coach", "Astrologer", "Energy Worker"],
      avoid_careers: ["Công việc văn phòng thông thường", "Kế toán", "Công việc không có ý nghĩa tâm linh"],
      work_style: "Cần môi trường tâm linh, flexible schedule, không áp lực"
    },
    love_relationships: {
      love_style: "Kết nối tâm linh sâu sắc, twin flame connections",
      ideal_partner: "Người hiểu về tâm linh, số 2, 7, 9 hoặc 11 khác",
      challenges: "Khó tìm người hiểu, quá nhạy cảm trong tình yêu",
      marriage_advice: "Cần người bạn đời spiritual và kiên nhẫn"
    },
    health_tendencies: {
      physical: ["Hệ thần kinh quá nhạy", "Insomnia", "Digestive issues", "Headaches/migraines", "Autoimmune disorders"],
      mental: ["High sensitivity", "Anxiety disorders", "Bipolar tendencies", "Psychic overwhelm", "Existential crisis"],
      healing_methods: ["Energy healing", "Crystal therapy", "Sound healing", "Meditation retreats", "Grounding exercises"]
    },
    lucky_numbers: [11, 29, 38, 47, 56, 65, 74],
    unlucky_numbers: [4, 8, 13],
    lucky_colors: ["Bạc ánh trăng", "Trắng tinh khiết", "Vàng nhạt tâm linh", "Tím lavender"],
    lucky_stones: ["Clear Quartz", "Selenite", "Moonstone", "Labradorite", "Amethyst"],
    lucky_days: ["Ngày 11 của tháng", "Thứ hai", "Thứ năm"],
    lucky_months: ["Tháng 11", "Tháng 2"],
    feng_shui: {
      directions: ["Đông Bắc", "Tây Nam"],
      elements: ["Ánh sáng", "Ether"],
      room_setup: "Altar tâm linh, crystals, meditation space, natural light"
    },
    life_cycles: {
      "0-28": "Giai đoạn khám phá và phát triển gifts tâm linh",
      "29-56": "Thời kỳ sử dụng gifts để phục vụ nhân loại",
      "57+": "Giai đoạn trở thành spiritual elder"
    },
    famous_people: ["Edgar Cayce", "Barack Obama", "Prince William", "Orlando Bloom"],
    advice: "Học cách grounding và bảo vệ energy field của mình",
    meditation_mantra: "Tôi là kênh truyền dẫn ánh sáng và tình yêu",
    life_purpose: "Nâng cao ý thức tập thể và dẫn dắt nhân loại tiến hóa tâm linh"
  },

  22: {
    title: "Số 22 - Người Kiến Tạo (The Master Builder)",
    subtitle: "Master Number - Thần số của tầm nhìn và thực hiện",
    personality: "Là kiến trúc sư của những ước mơ lớn với khả năng biến tầm nhìn thành hiện thực cụ thể. Kết hợp hoàn hảo giữa intuition của số 11 và practical power của số 4. Có thể tạo ra những thay đổi lớn lao cho nhân loại.",
    deep_traits: {
      core_essence: "Năng lượng vision và manifestation",
      life_mission: "Xây dựng những dự án lớn có tác động tích cực đến nhân loại",
      spiritual_lesson: "Học cách kiên nhẫn với quá trình và không bị overwhelm bởi tầm nhìn lớn",
      karmic_debt: "Sử dụng power một cách có trách nhiệm và không vì ego"
    },
    strengths: ["Tầm nhìn siêu việt", "Khả năng thực hiện concrete", "Leadership tự nhiên", "Tổ chức large-scale projects", "Practical wisdom", "Magnetic presence", "Problem-solving genius", "Global thinking"],
    weaknesses: ["Áp lực enormous", "Perfectionist extreme", "Impatience với others", "Stress từ expectations", "Difficulty delegating", "Workaholic tendencies", "Emotional suppression", "Burnout risk"],
    career_detailed: {
      best_careers: ["Architect (literal/metaphorical)", "Global CEO", "Environmental Engineer", "Urban Planner", "International Developer", "Technology Innovator", "Social Entrepreneur", "Visionary Leader"],
      avoid_careers: ["Công việc nhỏ lẻ", "Routine work", "Công việc không có impact"],
      work_style: "Cần quyền quyết định lớn, team mạnh, resources đầy đủ"
    },
    love_relationships: {
      love_style: "Protective, committed, thể hiện tình yêu qua building future together",
      ideal_partner: "Người hiểu và support vision, số 2, 4, 6",
      challenges: "Quá bận với big projects, khó balance work-life",
      marriage_advice: "Cần partner hiểu và share vision, support dream"
    },
    health_tendencies: {
      physical: ["High blood pressure", "Heart issues từ stress", "Back problems", "Chronic fatigue"],
      mental: ["Extreme stress", "Depression khi projects fail", "Anxiety về responsibility", "Overwhelm"],
      healing_methods: ["Executive retreats", "Massage therapy", "Nature immersion", "Delegation training"]
    },
    lucky_numbers: [22, 31, 40, 49, 58, 67, 76],
    unlucky_numbers: [3, 5, 14],
    lucky_colors: ["Vàng hoàng kim", "Đỏ quyền lực", "Xanh dương đậm", "Trắng tinh khiết"],
    lucky_stones: ["Diamond", "Ruby", "Sapphire", "Emerald", "Gold"],
    lucky_days: ["Ngày 22 của tháng", "Thứ bảy", "Chủ nhật"],
    lucky_months: ["Tháng 2", "Tháng 10"],
    feng_shui: {
      directions: ["Nam", "Bắc"],
      elements: ["Hỏa", "Thủy"],
      room_setup: "Executive office, vision boards, world maps, powerful symbols"
    },
    life_cycles: {
      "0-28": "Giai đoạn học hỏi và chuẩn bị cho mission lớn",
      "29-56": "Thời kỳ build và execute major projects",
      "57+": "Giai đoạn legacy và mentor next generation"
    },
    famous_people: ["Bill Gates", "Walt Disney", "Frank Lloyd Wright", "Oprah Winfrey"],
    advice: "Kiên nhẫn với process và remember to enjoy the journey",
    meditation_mantra: "Tôi xây dựng với tình yêu và vision cho tương lai",
    life_purpose: "Tạo ra những thay đổi tích cực lớn lao và lasting cho nhân loại"
  },

  33: {
    title: "Số 33 - Người Thầy Tối Thượng (The Master Healer)",
    subtitle: "Master Number - Thần số của tình yêu vô điều kiện và chữa lành",
    personality: "Là embodiment của compassion và unconditional love. Có khả năng chữa lành mạnh mẽ và là teacher của teachers. Sống để lift up humanity và heal collective wounds. Rare và sacred number với responsibility enormous.",
    deep_traits: {
      core_essence: "Năng lượng healing và unconditional love",
      life_mission: "Chữa lành và teaching ở highest level cho nhân loại",
      spiritual_lesson: "Học cách self-care và avoid martyr complex",
      karmic_debt: "Balance giữa giving và receiving, avoid sacrificing health"
    },
    strengths: ["Healing powers extraordinary", "Unconditional love", "Teaching mastery", "Compassion infinite", "Wisdom profound", "Charisma spiritual", "Transformational presence", "Global consciousness"],
    weaknesses: ["Martyr complex", "Self-sacrifice extreme", "Emotional overwhelm", "Physical depletion", "Boundary issues", "Taking on others' pain", "Neglecting self-care", "Spiritual bypassing"],
    career_detailed: {
      best_careers: ["Master Healer", "Spiritual Teacher", "Humanitarian Leader", "Therapist Trainer", "Global Peace Worker", "Consciousness Teacher", "Energy Master", "Wisdom Keeper"],
      avoid_careers: ["Materialistic pursuits", "Competitive industries", "Ego-driven careers"],
      work_style: "Service-oriented, healing environment, spiritual purpose essential"
    },
    love_relationships: {
      love_style: "Universal love, unconditional acceptance, healing through love",
      ideal_partner: "Highly evolved soul, understanding spiritual mission",
      challenges: "Love too universal, difficulty with personal relationships",
      marriage_advice: "Find soul mate who understands and supports mission"
    },
    health_tendencies: {
      physical: ["Energy depletion", "Immune system weakness", "Heart issues from giving too much", "Chronic fatigue"],
      mental: ["Empath overwhelm", "Depression từ world pain", "Anxiety about humanity", "Spiritual emergency"],
      healing_methods: ["Energy protection", "Retreat periods", "Master healers", "Sacred ceremonies"]
    },
    lucky_numbers: [33, 42, 51, 60, 69, 78, 87],
    unlucky_numbers: [1, 8, 17],
    lucky_colors: ["Vàng thánh", "Xanh lục healing", "Tím spiritual", "Trắng divine"],
    lucky_stones: ["Moldavite", "Clear Quartz Master", "Amethyst Cathedral", "Rose Quartz", "Selenite"],
    lucky_days: ["Ngày 33 combinations", "Ngày full moon", "Solstices"],
    lucky_months: ["Tháng 3", "Tháng 12"],
    feng_shui: {
      directions: ["Center - Heart chakra", "All directions unified"],
      elements: ["Light", "Love", "Divine essence"],
      room_setup: "Sacred space, healing altar, meditation sanctuary"
    },
    life_cycles: {
      "0-33": "Giai đoạn awakening và developing gifts",
      "34-66": "Thời kỳ active healing và teaching mission",
      "67+": "Giai đoạn wisdom keeper và spiritual elder"
    },
    famous_people: ["Jesus Christ", "Buddha", "Mother Teresa", "Dalai Lama"],
    advice: "Remember self-care là essential để serve others effectively",
    meditation_mantra: "Tôi chữa lành với tình yêu vô điều kiện và wisdom",
    life_purpose: "Embody và teach unconditional love, heal humanity's deepest wounds"
  }
};

// Tính toán số chủ đạo từ ngày sinh
function calculateLifePath(birthDate) {
  // Chuyển đổi ngày sinh thành chuỗi số
  let dateStr = birthDate.replace(/[^0-9]/g, '');
  
  // Tính tổng các chữ số
  let sum = 0;
  for (let digit of dateStr) {
    sum += parseInt(digit);
  }
  
  // Rút gọn về số chủ đạo (trừ số chủ đạo đặc biệt 11, 22, 33)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let newSum = 0;
    while (sum > 0) {
      newSum += sum % 10;
      sum = Math.floor(sum / 10);
    }
    sum = newSum;
  }
  
  return sum;
}

// Tính toán số biểu hiện từ tên đầy đủ
function calculateExpression(fullName) {
  let sum = 0;
  const cleanName = fullName.toUpperCase().replace(/[^A-ZÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g, '');
  
  for (let char of cleanName) {
    if (LETTER_TO_NUMBER[char]) {
      sum += LETTER_TO_NUMBER[char];
    }
  }
  
  // Rút gọn về số đơn (trừ số đặc biệt)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let newSum = 0;
    while (sum > 0) {
      newSum += sum % 10;
      sum = Math.floor(sum / 10);
    }
    sum = newSum;
  }
  
  return sum;
}

// Tính toán số tâm hồn từ nguyên âm trong tên
function calculateSoul(fullName) {
  let sum = 0;
  const cleanName = fullName.toUpperCase().replace(/[^A-ZÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g, '');
  const vowels = 'AÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬEÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢUÚÙỦŨỤƯỨỪỬỮỰYÝỲỶỸỴ';
  
  for (let char of cleanName) {
    if (vowels.includes(char) && LETTER_TO_NUMBER[char]) {
      sum += LETTER_TO_NUMBER[char];
    }
  }
  
  // Rút gọn về số đơn
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let newSum = 0;
    while (sum > 0) {
      newSum += sum % 10;
      sum = Math.floor(sum / 10);
    }
    sum = newSum;
  }
  
  return sum;
}

// Tính toán số nhân cách từ phụ âm trong tên
function calculatePersonality(fullName) {
  let sum = 0;
  const cleanName = fullName.toUpperCase().replace(/[^A-ZÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g, '');
  const vowels = 'AÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬEÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢUÚÙỦŨỤƯỨỪỬỮỰYÝỲỶỸỴ';
  
  for (let char of cleanName) {
    if (!vowels.includes(char) && LETTER_TO_NUMBER[char]) {
      sum += LETTER_TO_NUMBER[char];
    }
  }
  
  // Rút gọn về số đơn
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let newSum = 0;
    while (sum > 0) {
      newSum += sum % 10;
      sum = Math.floor(sum / 10);
    }
    sum = newSum;
  }
  
  return sum;
}

// Tính năm cá nhân hiện tại
function calculatePersonalYear(birthDate, currentYear = new Date().getFullYear()) {
  const birth = new Date(birthDate);
  let sum = birth.getDate() + (birth.getMonth() + 1) + currentYear;
  
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let newSum = 0;
    while (sum > 0) {
      newSum += sum % 10;
      sum = Math.floor(sum / 10);
    }
    sum = newSum;
  }
  
  return sum;
}

// Thông tin chi tiết về năm cá nhân - Phiên bản nâng cao
const PERSONAL_YEAR_MEANINGS = {
  1: {
    title: "Năm Khởi Đầu Mới (New Beginnings)",
    energy: "Năng lượng khởi đầu và independence",
    themes: ["Bắt đầu mới", "Độc lập", "Lãnh đạo", "Sáng tạo"],
    opportunities: [
      "Khởi nghiệp hoặc bắt đầu dự án mới",
      "Thay đổi career direction", 
      "Phát triển leadership skills",
      "Tạo dựng identity mới",
      "Đầu tư vào bản thân"
    ],
    challenges: [
      "Áp lực từ việc phải quyết định",
      "Cảm giác cô đơn khi pioneering",
      "Thiếu kiên nhẫn với quá trình",
      "Xu hướng ích kỷ"
    ],
    advice: "Đây là thời điểm tuyệt vời để bắt đầu những điều mới. Hãy tin tưởng vào bản thân và không sợ đi đầu.",
    career_focus: "Khởi nghiệp, promotion, new position, independent projects",
    relationship_focus: "New relationships, independence trong existing relationships",
    health_focus: "Bắt đầu fitness routine mới, energy high",
    financial_focus: "Đầu tư vào bản thân, seed money cho ventures mới",
    lucky_months: ["Tháng 1", "Tháng 10"],
    avoid: "Phụ thuộc quá nhiều vào người khác, procrastination"
  },
  2: {
    title: "Năm Hợp Tác và Kiên Nhẫn (Cooperation & Patience)",
    energy: "Năng lượng partnership và harmony",
    themes: ["Hợp tác", "Relationships", "Kiên nhẫn", "Diplomacy"],
    opportunities: [
      "Xây dựng partnerships quan trọng",
      "Kết hôn hoặc commitment",
      "Phát triển teamwork skills",
      "Học hỏi từ người khác",
      "Strengthening existing relationships"
    ],
    challenges: [
      "Thiếu confidence và self-doubt",
      "Quá phụ thuộc vào người khác", 
      "Sensitivity và hurt feelings",
      "Indecision và hesitation"
    ],
    advice: "Năm này không phải để rush mà để collaborative. Hãy nurture relationships và trust the process.",
    career_focus: "Teamwork, partnerships, supporting role, diplomacy",
    relationship_focus: "Marriage, partnerships, healing relationships",
    health_focus: "Emotional healing, gentle activities, support groups",
    financial_focus: "Joint ventures, savings, conservative investments",
    lucky_months: ["Tháng 2", "Tháng 11"],
    avoid: "Making major decisions alone, being too aggressive"
  },
  3: {
    title: "Năm Sáng Tạo và Biểu Đạt (Creative Expression)",
    energy: "Năng lượng creativity và communication",
    themes: ["Sáng tạo", "Communication", "Joy", "Social expansion"],
    opportunities: [
      "Phát triển artistic talents",
      "Viết sách, blog, hoặc creative projects",
      "Public speaking và teaching",
      "Social networking và making friends",
      "Marketing và promotion"
    ],
    challenges: [
      "Scatter energy và lack of focus",
      "Overspending on fun activities",
      "Superficial relationships",
      "Procrastination trên important tasks"
    ],
    advice: "Đây là năm để shine và express yourself. Hãy creative nhưng cũng stay focused.",
    career_focus: "Creative fields, marketing, communication, entertainment",
    relationship_focus: "Fun relationships, social expansion, expressing feelings",
    health_focus: "Activities that bring joy, creative therapy, voice care",
    financial_focus: "Income từ creative work, careful với overspending",
    lucky_months: ["Tháng 3", "Tháng 12"],
    avoid: "Taking on too many projects, neglecting practical matters"
  },
  4: {
    title: "Năm Xây Dựng và Kỷ Luật (Building & Discipline)",
    energy: "Năng lượng hard work và foundation",
    themes: ["Kỷ luật", "Hard work", "Organization", "Practical progress"],
    opportunities: [
      "Xây dựng solid foundation cho future",
      "Organize life và career",
      "Phát triển practical skills",
      "Real estate investments",
      "Long-term planning"
    ],
    challenges: [
      "Feeling restricted và limited",
      "Work overload và stress",
      "Boredom với routine",
      "Health issues từ overwork"
    ],
    advice: "Năm này đòi hỏi patience và persistence. Hard work sẽ pay off về long term.",
    career_focus: "Building skills, systematic work, management, construction",
    relationship_focus: "Serious commitments, building stable relationships",
    health_focus: "Regular exercise routine, discipline với diet, check-ups",
    financial_focus: "Savings, practical investments, budget planning",
    lucky_months: ["Tháng 4", "Tháng 8"],
    avoid: "Shortcuts, get-rich-quick schemes, neglecting health"
  },
  5: {
    title: "Năm Tự Do và Thay Đổi (Freedom & Change)",
    energy: "Năng lượng adventure và liberation",
    themes: ["Tự do", "Travel", "Change", "New experiences"],
    opportunities: [
      "Travel và explore new places",
      "Career changes và new opportunities", 
      "Learning new skills",
      "Meeting diverse people",
      "Breaking free từ limitations"
    ],
    challenges: [
      "Restlessness và impatience",
      "Difficulty với commitment",
      "Financial instability",
      "Overwhelming choices"
    ],
    advice: "Embrace change và adventure nhưng đừng burn bridges. Variety là key.",
    career_focus: "Travel-related work, sales, media, freelancing",
    relationship_focus: "Freedom trong relationships, meeting new people",
    health_focus: "Outdoor activities, variety trong exercise, travel health",
    financial_focus: "Multiple income streams, travel expenses, flexible budgeting",
    lucky_months: ["Tháng 5", "Tháng 9"],
    avoid: "Major commitments you're not ready for, excessive risk-taking"
  },
  6: {
    title: "Năm Trách Nhiệm và Gia Đình (Responsibility & Family)",
    energy: "Năng lượng nurturing và service",
    themes: ["Gia đình", "Service", "Healing", "Responsibility"],
    opportunities: [
      "Marriage và starting family",
      "Caring for aging parents",
      "Home improvement projects",
      "Healing work và counseling",
      "Community service"
    ],
    challenges: [
      "Overwhelming responsibilities",
      "Sacrificing personal needs",
      "Family drama và conflicts",
      "Financial burden từ family obligations"
    ],
    advice: "Năm này about giving và caring. Balance service với self-care.",
    career_focus: "Healthcare, education, counseling, home-based business",
    relationship_focus: "Marriage, family expansion, healing relationships",
    health_focus: "Family health, nurturing activities, emotional healing",
    financial_focus: "Family expenses, home investments, insurance",
    lucky_months: ["Tháng 6", "Tháng 9"],
    avoid: "Neglecting your own needs, taking on too much responsibility"
  },
  7: {
    title: "Năm Tâm Linh và Nghiên Cứu (Spiritual Development)",
    energy: "Năng lượng introspection và spiritual growth",
    themes: ["Tâm linh", "Study", "Introspection", "Wisdom"],
    opportunities: [
      "Spiritual development và meditation",
      "Education và research",
      "Writing và publishing",
      "Developing intuition",
      "Solo retreats và inner work"
    ],
    challenges: [
      "Loneliness và isolation",
      "Depression hoặc moodiness",
      "Overthinking và analysis paralysis",
      "Difficulty với social situations"
    ],
    advice: "Đây là năm để go within và connect với higher self. Trust your intuition.",
    career_focus: "Research, writing, teaching, spiritual work, analysis",
    relationship_focus: "Deeper connections, quality over quantity",
    health_focus: "Mental health, meditation, quiet activities",
    financial_focus: "Education investments, conservative approach",
    lucky_months: ["Tháng 7", "Tháng 11"],
    avoid: "Major social commitments, superficial activities"
  },
  8: {
    title: "Năm Thành Đạt và Quyền Lực (Achievement & Power)",
    energy: "Năng lượng material success và recognition",
    themes: ["Thành công", "Money", "Recognition", "Power"],
    opportunities: [
      "Major career advancement",
      "Financial investments và returns",
      "Business expansion",
      "Recognition và awards",
      "Leadership positions"
    ],
    challenges: [
      "Stress từ high expectations",
      "Work-life balance issues",
      "Materialistic focus",
      "Power struggles"
    ],
    advice: "Năm này about harvesting rewards từ past efforts. Use power responsibly.",
    career_focus: "Executive positions, business ownership, financial services",
    relationship_focus: "Power dynamics, successful partnerships",
    health_focus: "Executive health programs, stress management",
    financial_focus: "Major investments, real estate, wealth building",
    lucky_months: ["Tháng 8", "Tháng 12"],
    avoid: "Abuse of power, neglecting relationships for money"
  },
  9: {
    title: "Năm Hoàn Thành và Từ Thiện (Completion & Humanitarianism)",
    energy: "Năng lượng completion và universal love",
    themes: ["Hoàn thành", "Letting go", "Service", "Wisdom"],
    opportunities: [
      "Completing major projects",
      "Humanitarian work",
      "Teaching và mentoring",
      "Clearing out old patterns",
      "Preparing for new cycle"
    ],
    challenges: [
      "Endings và losses",
      "Emotional intensity",
      "Giving too much",
      "Nostalgia và dwelling on past"
    ],
    advice: "Năm này about wrapping up và preparing for new beginnings. Let go with grace.",
    career_focus: "Humanitarian work, teaching, completing projects",
    relationship_focus: "Forgiveness, completion, universal love",
    health_focus: "Detox, releasing old patterns, holistic healing",
    financial_focus: "Charitable giving, clearing debts, preparing for new cycle",
    lucky_months: ["Tháng 9", "Tháng 12"],
    avoid: "Starting new long-term projects, holding onto what needs to go"
  },
  11: {
    title: "Năm Truyền Cảm Hứng và Intuition (Inspiration & Intuition)",
    energy: "Năng lượng spiritual inspiration và higher consciousness",
    themes: ["Intuition", "Inspiration", "Spiritual growth", "Higher purpose"],
    opportunities: [
      "Spiritual awakening experiences",
      "Inspirational work và teaching",
      "Psychic development",
      "Creative breakthroughs",
      "Master teaching opportunities"
    ],
    challenges: [
      "Overwhelming sensitivity",
      "Nervous system overload",
      "Difficulty grounding",
      "Spiritual bypassing"
    ],
    advice: "Năm này about elevated consciousness. Ground yourself và use gifts wisely.",
    career_focus: "Spiritual teaching, healing, inspirational work",
    relationship_focus: "Soul connections, spiritual partnerships",
    health_focus: "Energy healing, nervous system care, grounding",
    financial_focus: "Income từ spiritual work, trusting divine timing",
    lucky_months: ["Tháng 11", "Tháng 2"],
    avoid: "Materialistic pursuits, ignoring practical needs"
  },
  22: {
    title: "Năm Kiến Tạo Vĩ Đại (Master Building)",
    energy: "Năng lượng master manifestation và global impact",
    themes: ["Master building", "Global vision", "Large-scale projects", "Legacy"],
    opportunities: [
      "Building something of lasting value",
      "International projects",
      "Master-level achievements",
      "Creating systems for others",
      "Leaving significant legacy"
    ],
    challenges: [
      "Enormous pressure và expectations",
      "Difficulty delegating",
      "Perfectionism paralysis",
      "Burnout từ overcommitment"
    ],
    advice: "Năm này about thinking big và building something significant. Pace yourself.",
    career_focus: "Master-level projects, international work, system building",
    relationship_focus: "Partnerships that support big vision",
    health_focus: "Executive health, stress management, delegation",
    financial_focus: "Large investments, international finance, legacy planning",
    lucky_months: ["Tháng 2", "Tháng 10"],
    avoid: "Small thinking, micromanaging, neglecting health"
  }
};

// Ma trận tương thích chi tiết - Phiên bản nâng cao
const COMPATIBILITY_MATRIX = {
  1: {
    best: [3, 5, 6],
    good: [1, 9, 11],
    neutral: [2, 7, 8],
    difficult: [4, 22],
    details: {
      1: { score: 7, description: "Hai người lãnh đạo mạnh mẽ - có thể clash nhưng cũng có thể tạo power couple" },
      2: { score: 6, description: "1 dẫn dắt, 2 hỗ trợ - relationship cân bằng nếu 1 học cách appreciate" },
      3: { score: 9, description: "1 provides direction, 3 brings creativity - dynamic và inspiring partnership" },
      4: { score: 4, description: "1 quá spontaneous cho 4's need for security - cần patience từ cả hai" },
      5: { score: 8, description: "Adventure-loving couple với shared love for independence và new experiences" },
      6: { score: 8, description: "1 provides protection, 6 provides nurturing - traditional roles work well" },
      7: { score: 6, description: "1's extroversion balances 7's introversion - respect differences" },
      8: { score: 6, description: "Power couple potential nhưng cần avoid competition với nhau" },
      9: { score: 7, description: "1's personal goals complement 9's humanitarian vision" },
      11: { score: 7, description: "1 provides grounding for 11's spiritual insights" },
      22: { score: 5, description: "Both powerful nhưng 22's vision có thể overwhelm 1's directness" }
    }
  },
  2: {
    best: [2, 4, 8],
    good: [6, 9, 11],
    neutral: [1, 3, 7],
    difficult: [5, 22],
    details: {
      1: { score: 6, description: "2 supports 1's ambitions while 1 provides protection và direction" },
      2: { score: 9, description: "Perfect harmony - understanding, cooperation, và shared sensitivity" },
      3: { score: 6, description: "2 appreciates 3's creativity, 3 needs 2's emotional support" },
      4: { score: 9, description: "Stable foundation - 2's cooperation với 4's reliability creates security" },
      5: { score: 4, description: "2 needs security, 5 needs freedom - fundamental incompatibility" },
      6: { score: 8, description: "Both nurturing và family-oriented - domestic bliss potential" },
      7: { score: 6, description: "2's emotional intelligence helps 7 open up emotionally" },
      8: { score: 8, description: "2 supports 8's ambitions while 8 provides security" },
      9: { score: 7, description: "Both compassionate - 2 supports 9's humanitarian goals" },
      11: { score: 8, description: "2's grounding helps 11's sensitivity - spiritual partnership" },
      22: { score: 5, description: "2 can support 22's vision nhưng may feel overwhelmed" }
    }
  },
  3: {
    best: [1, 5, 7],
    good: [3, 6, 9],
    neutral: [2, 8, 11],
    difficult: [4, 22],
    details: {
      1: { score: 9, description: "1's leadership với 3's creativity creates dynamic partnership" },
      2: { score: 6, description: "3's optimism lifts 2's moods, 2 provides emotional stability" },
      3: { score: 8, description: "Creative synergy và fun - social butterfly couple" },
      4: { score: 4, description: "3's spontaneity clashes với 4's need for routine" },
      5: { score: 9, description: "Adventure và creativity combined - exciting relationship" },
      6: { score: 7, description: "3 brings joy to 6's serious nature, 6 provides grounding" },
      7: { score: 8, description: "3's lightness balances 7's depth - complementary energies" },
      8: { score: 6, description: "3 can help 8 lighten up, 8 provides practical support" },
      9: { score: 7, description: "Both creative và idealistic - inspiring partnership" },
      11: { score: 6, description: "3's joy helps ground 11's intensity" },
      22: { score: 5, description: "3's scattered energy may frustrate 22's focused vision" }
    }
  },
  4: {
    best: [2, 6, 8],
    good: [4, 7, 22],
    neutral: [9, 11],
    difficult: [1, 3, 5],
    details: {
      1: { score: 4, description: "1's impulsiveness frustrates 4's need for stability" },
      2: { score: 9, description: "Perfect match - 2's cooperation với 4's reliability" },
      3: { score: 4, description: "4 finds 3 too unpredictable và scattered" },
      4: { score: 8, description: "Shared values of stability và hard work - solid foundation" },
      5: { score: 3, description: "Fundamental opposition - 4 needs security, 5 needs freedom" },
      6: { score: 9, description: "Both value family và stability - traditional relationship" },
      7: { score: 7, description: "4 provides grounding for 7's intellectual pursuits" },
      8: { score: 8, description: "Business partnership potential - shared practical goals" },
      9: { score: 6, description: "4's practicality helps ground 9's idealism" },
      11: { score: 6, description: "4 can provide stability for 11's sensitive nature" },
      22: { score: 8, description: "4's systematic approach supports 22's grand vision" }
    }
  },
  5: {
    best: [1, 3, 7],
    good: [5, 9, 11],
    neutral: [6, 8],
    difficult: [2, 4, 22],
    details: {
      1: { score: 8, description: "Adventure couple - both independent và strong-willed" },
      2: { score: 4, description: "5's need for freedom conflicts với 2's need for security" },
      3: { score: 9, description: "Fun-loving couple với shared love of variety" },
      4: { score: 3, description: "5's restlessness threatens 4's need for stability" },
      5: { score: 8, description: "Ultimate freedom couple - understanding về space needs" },
      6: { score: 6, description: "5 brings adventure to 6's domestic life" },
      7: { score: 8, description: "Both value independence - intellectual connection" },
      8: { score: 6, description: "5's versatility complements 8's business focus" },
      9: { score: 7, description: "Both idealistic về making world better" },
      11: { score: 7, description: "5's adaptability supports 11's changing spiritual needs" },
      22: { score: 4, description: "5's changeability conflicts với 22's need for commitment" }
    }
  },
  6: {
    best: [2, 3, 9],
    good: [4, 6, 8],
    neutral: [1, 5, 7, 11],
    difficult: [22],
    details: {
      1: { score: 8, description: "6 nurtures 1's ambitions while 1 protects family" },
      2: { score: 8, description: "Natural harmony - both nurturing và family-focused" },
      3: { score: 7, description: "6 provides stability for 3's creativity" },
      4: { score: 9, description: "Traditional relationship với shared family values" },
      5: { score: 6, description: "6's domestic focus balances 5's wanderlust" },
      6: { score: 8, description: "Deep understanding của family needs - nurturing relationship" },
      7: { score: 6, description: "6's warmth helps 7 open emotionally" },
      8: { score: 7, description: "6 creates home sanctuary for 8's work stress" },
      9: { score: 9, description: "Both service-oriented - humanitarian partnership" },
      11: { score: 6, description: "6's grounding helps 11's spiritual sensitivity" },
      22: { score: 5, description: "6's personal focus may conflict với 22's global vision" }
    }
  },
  7: {
    best: [3, 5, 7],
    good: [1, 4, 9],
    neutral: [2, 6, 8, 11, 22],
    difficult: [],
    details: {
      1: { score: 6, description: "1's confidence helps 7 express ideas publicly" },
      2: { score: 6, description: "2's emotional intelligence helps 7 connect" },
      3: { score: 8, description: "3's lightness balances 7's seriousness" },
      4: { score: 7, description: "4's stability supports 7's research pursuits" },
      5: { score: 8, description: "Both value independence và intellectual freedom" },
      6: { score: 6, description: "6's nurturing helps 7 feel emotionally safe" },
      7: { score: 9, description: "Deep intellectual connection - understanding về solitude needs" },
      8: { score: 6, description: "7's wisdom advises 8's practical decisions" },
      9: { score: 7, description: "Spiritual connection - both seek higher meaning" },
      11: { score: 6, description: "Spiritual kinship - understanding về higher consciousness" },
      22: { score: 6, description: "7's research supports 22's visionary projects" }
    }
  },
  8: {
    best: [2, 4, 6],
    good: [8, 22],
    neutral: [1, 3, 5, 7, 9, 11],
    difficult: [],
    details: {
      1: { score: 6, description: "Power couple potential - need to avoid competition" },
      2: { score: 8, description: "2 supports 8's ambitions while 8 provides security" },
      3: { score: 6, description: "3 helps 8 enjoy life's pleasures" },
      4: { score: 8, description: "Strong business partnership - shared practical goals" },
      5: { score: 6, description: "5's flexibility helps 8 adapt to changes" },
      6: { score: 7, description: "6 creates stable home base for 8's success" },
      7: { score: 6, description: "7's wisdom guides 8's decision-making" },
      8: { score: 8, description: "Business empire builders - shared ambition" },
      9: { score: 6, description: "8's success enables 9's humanitarian work" },
      11: { score: 6, description: "11's intuition guides 8's business decisions" },
      22: { score: 8, description: "Powerful combination - 8's execution với 22's vision" }
    }
  },
  9: {
    best: [1, 6, 9],
    good: [2, 3, 5, 7],
    neutral: [4, 8, 11, 22],
    difficult: [],
    details: {
      1: { score: 7, description: "1's leadership helps manifest 9's humanitarian vision" },
      2: { score: 7, description: "Both compassionate - supportive relationship" },
      3: { score: 7, description: "Creative partnership với shared idealism" },
      4: { score: 6, description: "4's practicality grounds 9's lofty goals" },
      5: { score: 7, description: "Both freedom-loving với global perspective" },
      6: { score: 9, description: "Perfect match - both service-oriented và caring" },
      7: { score: 7, description: "Spiritual connection với shared search for meaning" },
      8: { score: 6, description: "8's resources support 9's humanitarian projects" },
      9: { score: 9, description: "Ultimate understanding - shared universal love" },
      11: { score: 7, description: "Spiritual partnership với humanitarian focus" },
      22: { score: 6, description: "22's building skills manifest 9's global vision" }
    }
  },
  11: {
    best: [2, 6, 9],
    good: [1, 5, 7, 11],
    neutral: [3, 4, 8, 22],
    difficult: [],
    details: {
      1: { score: 7, description: "1 provides grounding for 11's spiritual insights" },
      2: { score: 8, description: "2's support helps 11 manage sensitivity" },
      3: { score: 6, description: "3's joy lightens 11's intense spiritual work" },
      4: { score: 6, description: "4's stability grounds 11's spiritual flights" },
      5: { score: 7, description: "5's adaptability matches 11's changing spiritual needs" },
      6: { score: 8, description: "6's nurturing supports 11's healing work" },
      7: { score: 7, description: "Spiritual kinship với shared intuitive gifts" },
      8: { score: 6, description: "8's practical support enables 11's spiritual mission" },
      9: { score: 7, description: "Shared humanitarian và spiritual goals" },
      11: { score: 8, description: "Deep spiritual understanding - twin flame potential" },
      22: { score: 6, description: "11's inspiration guides 22's master building" }
    }
  },
  22: {
    best: [4, 8, 22],
    good: [2, 6],
    neutral: [1, 7, 9, 11],
    difficult: [3, 5],
    details: {
      1: { score: 5, description: "1's directness may conflict với 22's complex vision" },
      2: { score: 7, description: "2's support crucial for 22's overwhelming responsibilities" },
      3: { score: 4, description: "3's scattered energy frustrates 22's focused approach" },
      4: { score: 9, description: "Perfect partnership - 4's systems support 22's vision" },
      5: { score: 4, description: "5's changeability conflicts với 22's need for commitment" },
      6: { score: 7, description: "6's stability provides home base for 22's global work" },
      7: { score: 6, description: "7's research supports 22's comprehensive planning" },
      8: { score: 8, description: "Powerful combination - execution meets master vision" },
      9: { score: 6, description: "9's humanitarian goals align với 22's global impact" },
      11: { score: 6, description: "11's spiritual insight guides 22's material manifestation" },
      22: { score: 9, description: "Master builder partnership - world-changing potential" }
    }
  },
  33: {
    best: [6, 9, 11],
    good: [2, 7, 22, 33],
    neutral: [1, 3, 4, 5, 8],
    difficult: [],
    details: {
      1: { score: 6, description: "1's strength supports 33's healing mission" },
      2: { score: 8, description: "2's cooperation essential for 33's service work" },
      3: { score: 6, description: "3's joy helps lighten 33's heavy responsibilities" },
      4: { score: 6, description: "4's structure supports 33's teaching work" },
      5: { score: 6, description: "5's adaptability helps 33 reach diverse people" },
      6: { score: 9, description: "Ultimate nurturing partnership - healing the world together" },
      7: { score: 8, description: "Spiritual depth supporting 33's master teaching" },
      8: { score: 6, description: "8's resources enable 33's humanitarian work" },
      9: { score: 9, description: "Perfect understanding - shared universal mission" },
      11: { score: 9, description: "Spiritual partnership at highest level" },
      22: { score: 8, description: "22's building skills manifest 33's healing vision" },
      33: { score: 9, description: "Divine partnership - world transformation potential" }
    }
  }
};

// Hàm phân tích tương thích
function analyzeCompatibility(number1, number2) {
  if (!COMPATIBILITY_MATRIX[number1]) return "Không xác định";
  
  const compat = COMPATIBILITY_MATRIX[number1];
  if (compat.best.includes(number2)) return "Rất tốt";
  if (compat.good.includes(number2)) return "Tốt";
  if (compat.neutral.includes(number2)) return "Bình thường";
  if (compat.difficult.includes(number2)) return "Khó khăn";
  return "Bình thường";
}

// Hàm phân tích thần số học tổng hợp
function analyzeNumerology(name, birthDate) {
  try {
    const lifePath = calculateLifePath(birthDate);
    const expression = calculateExpression(name);
    const soul = calculateSoul(name);
    const personality = calculatePersonality(name);
    const personalYear = calculatePersonalYear(birthDate);
    
    return {
      lifePath: {
        number: lifePath,
        meaning: LIFE_PATH_MEANINGS[lifePath] || { title: "Không xác định", personality: "Chưa có thông tin" }
      },
      expression: {
        number: expression,
        meaning: LIFE_PATH_MEANINGS[expression] || { title: "Không xác định", personality: "Chưa có thông tin" }
      },
      soul: {
        number: soul,
        meaning: LIFE_PATH_MEANINGS[soul] || { title: "Không xác định", personality: "Chưa có thông tin" }
      },
      personality: {
        number: personality,
        meaning: LIFE_PATH_MEANINGS[personality] || { title: "Không xác định", personality: "Chưa có thông tin" }
      },
      personalYear: {
        number: personalYear,
        meaning: PERSONAL_YEAR_MEANINGS[personalYear] || "Chưa có thông tin"
      }
    };
  } catch (error) {
    console.error("Lỗi phân tích thần số học:", error);
    return null;
  }
}

// ======== Phân tích tên theo thần số học ========
function analyzeNameNumerology(fullName) {
  const nameWithoutDiacritics = removeDiacritics(fullName.toUpperCase());
  
  // Bảng chuyển đổi chữ cái sang số
  const letterValues = {
    'A': 1, 'J': 1, 'S': 1,
    'B': 2, 'K': 2, 'T': 2,
    'C': 3, 'L': 3, 'U': 3,
    'D': 4, 'M': 4, 'V': 4,
    'E': 5, 'N': 5, 'W': 5,
    'F': 6, 'O': 6, 'X': 6,
    'G': 7, 'P': 7, 'Y': 7,
    'H': 8, 'Q': 8, 'Z': 8,
    'I': 9, 'R': 9
  };
  
  // Tách họ, tên đệm, tên
  const nameParts = fullName.trim().split(/\s+/);
  const lastName = nameParts[0] || '';
  const firstName = nameParts[nameParts.length - 1] || '';
  const middleName = nameParts.slice(1, -1).join(' ') || '';
  
  // Tính số biểu đạt (Expression Number) - tổng tất cả chữ cái
  let expressionSum = 0;
  for (let char of nameWithoutDiacritics.replace(/\s/g, '')) {
    if (letterValues[char]) {
      expressionSum += letterValues[char];
    }
  }
  const expressionNumber = reduceToSingleDigit(expressionSum);
  
  // Tính số linh hồn (Soul Number) - chỉ các nguyên âm
  const vowels = 'AEIOU';
  let soulSum = 0;
  for (let char of nameWithoutDiacritics.replace(/\s/g, '')) {
    if (vowels.includes(char) && letterValues[char]) {
      soulSum += letterValues[char];
    }
  }
  const soulNumber = reduceToSingleDigit(soulSum);
  
  // Tính số nhân cách (Personality Number) - chỉ các phụ âm
  let personalitySum = 0;
  for (let char of nameWithoutDiacritics.replace(/\s/g, '')) {
    if (!vowels.includes(char) && letterValues[char]) {
      personalitySum += letterValues[char];
    }
  }
  const personalityNumber = reduceToSingleDigit(personalitySum);
  
  // Tính số vận mệnh tên (Name Destiny)
  const firstNameValue = calculateNameValue(firstName, letterValues);
  const lastNameValue = calculateNameValue(lastName, letterValues);
  
  return {
    fullName: fullName,
    nameParts: {
      lastName: lastName,
      middleName: middleName,
      firstName: firstName
    },
    numbers: {
      expression: {
        number: expressionNumber,
        meaning: EXPRESSION_MEANINGS[expressionNumber] || LIFE_PATH_MEANINGS[expressionNumber],
        calculation: `${expressionSum} → ${expressionNumber}`
      },
      soul: {
        number: soulNumber,
        meaning: SOUL_MEANINGS[soulNumber] || LIFE_PATH_MEANINGS[soulNumber],
        calculation: `${soulSum} → ${soulNumber}`
      },
      personality: {
        number: personalityNumber,
        meaning: PERSONALITY_MEANINGS[personalityNumber] || LIFE_PATH_MEANINGS[personalityNumber],
        calculation: `${personalitySum} → ${personalityNumber}`
      },
      firstName: {
        number: firstNameValue,
        meaning: LIFE_PATH_MEANINGS[firstNameValue]
      },
      lastName: {
        number: lastNameValue,
        meaning: LIFE_PATH_MEANINGS[lastNameValue]
      }
    }
  };
}

function removeDiacritics(str) {
  const diacriticsMap = {
    'À': 'A', 'Á': 'A', 'Ả': 'A', 'Ã': 'A', 'Ạ': 'A',
    'Ă': 'A', 'Ằ': 'A', 'Ắ': 'A', 'Ẳ': 'A', 'Ẵ': 'A', 'Ặ': 'A',
    'Â': 'A', 'Ầ': 'A', 'Ấ': 'A', 'Ẩ': 'A', 'Ẫ': 'A', 'Ậ': 'A',
    'È': 'E', 'É': 'E', 'Ẻ': 'E', 'Ẽ': 'E', 'Ẹ': 'E',
    'Ê': 'E', 'Ề': 'E', 'Ế': 'E', 'Ể': 'E', 'Ễ': 'E', 'Ệ': 'E',
    'Ì': 'I', 'Í': 'I', 'Ỉ': 'I', 'Ĩ': 'I', 'Ị': 'I',
    'Ò': 'O', 'Ó': 'O', 'Ỏ': 'O', 'Õ': 'O', 'Ọ': 'O',
    'Ô': 'O', 'Ồ': 'O', 'Ố': 'O', 'Ổ': 'O', 'Ỗ': 'O', 'Ộ': 'O',
    'Ơ': 'O', 'Ờ': 'O', 'Ớ': 'O', 'Ở': 'O', 'Ỡ': 'O', 'Ợ': 'O',
    'Ù': 'U', 'Ú': 'U', 'Ủ': 'U', 'Ũ': 'U', 'Ụ': 'U',
    'Ư': 'U', 'Ừ': 'U', 'Ứ': 'U', 'Ử': 'U', 'Ữ': 'U', 'Ự': 'U',
    'Ỳ': 'Y', 'Ý': 'Y', 'Ỷ': 'Y', 'Ỹ': 'Y', 'Ỵ': 'Y',
    'Đ': 'D'
  };
  
  return str.replace(/[^\x00-\x7F]/g, function(char) {
    return diacriticsMap[char] || char;
  });
}

function calculateNameValue(name, letterValues) {
  let sum = 0;
  const nameUpper = removeDiacritics(name.toUpperCase());
  for (let char of nameUpper) {
    if (letterValues[char]) {
      sum += letterValues[char];
    }
  }
  return reduceToSingleDigit(sum);
}

// ======== Phân tích số điện thoại theo thần số học ========
function analyzePhoneNumerology(phoneNumber) {
  // Loại bỏ tất cả ký tự không phải số
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  
  if (cleanPhone.length < 8) {
    return {
      error: 'Số điện thoại phải có ít nhất 8 chữ số'
    };
  }
  
  // Tính tổng tất cả các chữ số
  let totalSum = 0;
  for (let digit of cleanPhone) {
    totalSum += parseInt(digit);
  }
  const mainNumber = reduceToSingleDigit(totalSum);
  
  // Phân tích các phần của số điện thoại
  const lastFourDigits = cleanPhone.slice(-4);
  const lastFourSum = lastFourDigits.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  const personalNumber = reduceToSingleDigit(lastFourSum);
  
  // Phân tích đầu số (3 chữ số đầu)
  const prefix = cleanPhone.slice(0, 3);
  const prefixSum = prefix.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  const prefixNumber = reduceToSingleDigit(prefixSum);
  
  // Phân tích tần suất xuất hiện của từng số
  const digitFrequency = {};
  for (let i = 0; i <= 9; i++) {
    digitFrequency[i] = 0;
  }
  for (let digit of cleanPhone) {
    digitFrequency[parseInt(digit)]++;
  }
  
  // Tìm số xuất hiện nhiều nhất
  let dominantDigit = 0;
  let maxFrequency = 0;
  for (let digit in digitFrequency) {
    if (digitFrequency[digit] > maxFrequency) {
      maxFrequency = digitFrequency[digit];
      dominantDigit = parseInt(digit);
    }
  }
  
  return {
    phoneNumber: phoneNumber,
    cleanPhone: cleanPhone,
    analysis: {
      mainNumber: {
        number: mainNumber,
        meaning: PHONE_MEANINGS[mainNumber] || LIFE_PATH_MEANINGS[mainNumber],
        calculation: `${totalSum} → ${mainNumber}`
      },
      personalNumber: {
        number: personalNumber,
        meaning: PHONE_PERSONAL_MEANINGS[personalNumber] || LIFE_PATH_MEANINGS[personalNumber],
        calculation: `4 số cuối (${lastFourDigits}): ${lastFourSum} → ${personalNumber}`
      },
      prefixNumber: {
        number: prefixNumber,
        meaning: PHONE_PREFIX_MEANINGS[prefixNumber] || LIFE_PATH_MEANINGS[prefixNumber],
        calculation: `Đầu số (${prefix}): ${prefixSum} → ${prefixNumber}`
      },
      dominantDigit: {
        digit: dominantDigit,
        frequency: maxFrequency,
        meaning: DOMINANT_DIGIT_MEANINGS[dominantDigit] || LIFE_PATH_MEANINGS[dominantDigit]
      },
      digitFrequency: digitFrequency
    }
  };
}

// Thêm dữ liệu ý nghĩa cho số điện thoại - Phiên bản nâng cao
const PHONE_MEANINGS = {
  1: { 
    title: "Số điện thoại Thủ lĩnh - Người tiên phong",
    personality: "Số điện thoại này mang năng lượng lãnh đạo mạnh mẽ, giúp chủ sở hữu tự tin, quyết đoán trong mọi cuộc giao tiếp. Đặc biệt tốt cho doanh nhân, quản lý cấp cao và những người cần thể hiện sự độc lập.",
    business_impact: "Tăng cường khả năng đàm phán, thu hút cơ hội hợp tác kinh doanh và tạo ấn tượng mạnh với đối tác.",
    personal_life: "Giúp người dùng trở nên chủ động hơn trong các mối quan hệ và có xu hướng dẫn dắt trong nhóm bạn.",
    feng_shui: "Phù hợp với người mệnh Hỏa, Kim. Tăng cường vận may trong sự nghiệp và danh tiếng."
  },
  2: { 
    title: "Số điện thoại Hợp tác - Người hòa giải",
    personality: "Mang năng lượng hòa hợp, khuyến khích sự cân bằng và hợp tác. Giúp xây dựng mối quan hệ bền vững và giải quyết xung đột một cách khéo léo.",
    business_impact: "Thúc đẩy các mối quan hệ đối tác, hợp tác kinh doanh thành công và tạo môi trường làm việc hòa thuận.",
    personal_life: "Tăng cường khả năng lắng nghe, chia sẻ và tạo sự tin tưởng trong các mối quan hệ tình cảm.",
    feng_shui: "Phù hợp với người mệnh Thổ, Thủy. Cải thiện vận may về tình duyên và các mối quan hệ xã hội."
  },
  3: { 
    title: "Số điện thoại Sáng tạo - Người truyền cảm hứng",
    personality: "Kích thích khả năng sáng tạo, giao tiếp xuất sắc và thu hút sự chú ý tích cực. Đặc biệt phù hợp với những người làm nghệ thuật, truyền thông, marketing.",
    business_impact: "Tăng cường khả năng marketing cá nhân, thu hút khách hàng và tạo ra những ý tưởng kinh doanh độc đáo.",
    personal_life: "Giúp người dùng trở nên thú vị, hài hước và có sức hút đặc biệt trong các buổi gặp gỡ xã hội.",
    feng_shui: "Phù hợp với người mệnh Hỏa, Mộc. Tăng cường vận may về sáng tạo và khả năng biểu đạt."
  },
  4: { 
    title: "Số điện thoại Ổn định - Người xây dựng",
    personality: "Mang năng lượng vững chắc, đáng tin cậy. Giúp xây dựng nền tảng kinh doanh bền vững và tạo lòng tin với mọi người xung quanh.",
    business_impact: "Thúc đẩy sự phát triển từng bước, tích lũy tài sản và xây dựng thương hiệu cá nhân đáng tin cậy.",
    personal_life: "Tăng cường tính kỷ luật, trách nhiệm và khả năng cam kết lâu dài trong các mối quan hệ.",
    feng_shui: "Phù hợp với người mệnh Thổ, Kim. Cải thiện vận may về tài chính và sự nghiệp ổn định."
  },
  5: { 
    title: "Số điện thoại Tự do - Người khám phá",
    personality: "Khuyến khích sự linh hoạt, phiêu lưu và không ngừng tìm kiếm cơ hội mới. Phù hợp với những người làm sales, du lịch, hoặc kinh doanh đa dạng.",
    business_impact: "Mở rộng mạng lưới kinh doanh, tạo cơ hội hợp tác quốc tế và thúc đẩy sự đổi mới trong công việc.",
    personal_life: "Giúp người dùng thoát khỏi sự nhàm chán, tìm kiếm những trải nghiệm mới và mở rộng tầm nhìn.",
    feng_shui: "Phù hợp với người mệnh Mộc, Hỏa. Tăng cường vận may về du lịch và các cơ hội mới."
  },
  6: { 
    title: "Số điện thoại Chăm sóc - Người nuôi dưỡng",
    personality: "Tăng cường năng lượng yêu thương, trách nhiệm và khả năng chăm sóc. Đặc biệt tốt cho những người làm việc trong lĩnh vực giáo dục, y tế, dịch vụ.",
    business_impact: "Xây dựng mối quan hệ khách hàng trung thành, phát triển dịch vụ chăm sóc khách hàng xuất sắc.",
    personal_life: "Tăng cường khả năng chăm sóc gia đình, tạo môi trường sống ấm áp và hạnh phúc.",
    feng_shui: "Phù hợp với người mệnh Thổ, Thủy. Cải thiện vận may về gia đình và sức khỏe."
  },
  7: { 
    title: "Số điện thoại Trí tuệ - Người tìm kiếm chân lý",
    personality: "Kích thích trực giác và khả năng phân tích sâu sắc. Phù hợp với những người làm nghiên cứu, tư vấn, hoặc các lĩnh vực đòi hỏi tư duy phân tích.",
    business_impact: "Tăng cường khả năng đưa ra quyết định sáng suốt, phân tích thị trường chính xác và tìm ra giải pháp sáng tạo.",
    personal_life: "Giúp người dùng phát triển trực giác, khả năng hiểu sâu bản thân và tìm kiếm ý nghĩa cuộc sống.",
    feng_shui: "Phù hợp với người mệnh Thủy, Kim. Tăng cường vận may về học tập và phát triển tâm linh."
  },
  8: { 
    title: "Số điện thoại Quyền lực - Người thành đạt",
    personality: "Mang năng lượng thành công về vật chất, quyền lực và khả năng quản lý tài chính hiệu quả. Đặc biệt phù hợp với lãnh đạo doanh nghiệp, nhà đầu tư.",
    business_impact: "Thu hút cơ hội đầu tư, tăng cường khả năng quản lý tài chính và xây dựng đế chế kinh doanh.",
    personal_life: "Giúp người dùng đạt được mục tiêu vật chất, tạo sự ổn định tài chính cho gia đình.",
    feng_shui: "Phù hợp với người mệnh Kim, Thổ. Tăng cường vận may về tài lộc và quyền lực."
  },
  9: { 
    title: "Số điện thoại Nhân đạo - Người phục vụ",
    personality: "Khuyến khích lòng bao dung, sự hy sinh và khả năng phục vụ cộng đồng. Phù hợp với những người làm từ thiện, tổ chức xã hội, giáo dục.",
    business_impact: "Xây dựng thương hiệu có trách nhiệm xã hội, thu hút sự ủng hộ từ cộng đồng và tạo tác động tích cực.",
    personal_life: "Tăng cường lòng compassion, khả năng đồng cảm và mong muốn đóng góp cho xã hội.",
    feng_shui: "Phù hợp với mọi mệnh. Tăng cường vận may về danh tiếng và các mối quan hệ xã hội."
  }
};

const PHONE_PERSONAL_MEANINGS = {
  1: { 
    personality: "4 số cuối mang năng lượng khởi đầu và độc lập trong các mối quan hệ cá nhân.",
    relationship: "Có xu hướng dẫn dắt trong tình yêu, cần bạn đời hiểu và ủng hộ.",
    compatibility: "Hợp với số 2, 3, 9. Cần cẩn thận với số 4, 8."
  },
  2: { 
    personality: "4 số cuối tạo sự hòa hợp, là đối tác tuyệt vời trong tình yêu và friendship.",
    relationship: "Rất chu đáo và quan tâm đến cảm xúc của người yêu.",
    compatibility: "Hợp với số 1, 6, 8. Cần kiên nhẫn với số 5, 7."
  },
  3: { 
    personality: "4 số cuối mang tính giao tiếp, vui vẻ và có sức hút đặc biệt trong các mối quan hệ.",
    relationship: "Mang lại niềm vui và sự sáng tạo cho các mối quan hệ.",
    compatibility: "Hợp với số 1, 5, 6. Có thể xung đột với số 4, 7."
  },
  4: { 
    personality: "4 số cuối tạo sự tin cậy, ổn định và cam kết lâu dài trong các mối quan hệ.",
    relationship: "Là người bạn đời đáng tin cậy, thích sự ổn định.",
    compatibility: "Hợp với số 2, 6, 8. Cần thấu hiểu với số 3, 5."
  },
  5: { 
    personality: "4 số cuối mang tính phiêu lưu, thích khám phá và tự do trong các mối quan hệ.",
    relationship: "Cần không gian cá nhân và sự đa dạng trong tình yêu.",
    compatibility: "Hợp với số 3, 7, 9. Có thể mâu thuẫn với số 2, 4."
  },
  6: { 
    personality: "4 số cuối tạo sự ấm áp, chăm sóc và trách nhiệm cao với người thân.",
    relationship: "Là người yêu lý tưởng, luôn đặt gia đình lên hàng đầu.",
    compatibility: "Hợp với số 2, 3, 9. Cần cân bằng với số 1, 8."
  },
  7: { 
    personality: "4 số cuối mang tính nội tâm, sâu sắc và tâm linh trong các mối quan hệ.",
    relationship: "Cần người bạn đời hiểu và tôn trọng không gian riêng tư.",
    compatibility: "Hợp với số 5, 7, 9. Khó khăn với số 2, 8."
  },
  8: { 
    personality: "4 số cuối tạo uy tín, thành công và tham vọng trong các mối quan hệ nghề nghiệp.",
    relationship: "Thích đối tác thành công và có tham vọng.",
    compatibility: "Hợp với số 2, 4, 6. Cần chú ý với số 7, 9."
  },
  9: { 
    personality: "4 số cuối mang tính nhân đạo, bao dung và yêu thương vô điều kiện.",
    relationship: "Là người yêu lý tưởng với lòng bao dung lớn.",
    compatibility: "Hợp với hầu hết các số, đặc biệt là 1, 6, 9."
  }
};

const PHONE_PREFIX_MEANINGS = {
  1: { 
    personality: "Đầu số mang năng lượng lãnh đạo, phù hợp với doanh nhân, quản lý cấp cao.",
    career: "Tốt cho các ngành: kinh doanh, quản lý, chính trị, khởi nghiệp.",
    energy: "Tăng cường sự tự tin và khả năng ra quyết định."
  },
  2: { 
    personality: "Đầu số tạo sự hợp tác, phù hợp với công việc đòi hỏi teamwork và đối tác.",
    career: "Tốt cho các ngành: tư vấn, trung gian, giáo dục, y tế.",
    energy: "Cải thiện khả năng làm việc nhóm và xây dựng mối quan hệ."
  },
  3: { 
    personality: "Đầu số kích thích sáng tạo và giao tiếp, phù hợp với nghệ thuật, truyền thông, marketing.",
    career: "Tốt cho các ngành: quảng cáo, thiết kế, giải trí, báo chí.",
    energy: "Tăng cường khả năng biểu đạt và thu hút sự chú ý."
  },
  4: { 
    personality: "Đầu số mang tính thực tế và ổn định, phù hợp với ngân hàng, xây dựng, kế toán.",
    career: "Tốt cho các ngành: tài chính, kiến trúc, logistics, sản xuất.",
    energy: "Tăng cường tính kỷ luật và khả năng tích lũy tài sản."
  },
  5: { 
    personality: "Đầu số tạo sự linh hoạt và phiêu lưu, phù hợp với du lịch, sales, thương mại.",
    career: "Tốt cho các ngành: bán hàng, du lịch, vận tải, xuất nhập khẩu.",
    energy: "Kích thích sự thay đổi và mở rộng cơ hội kinh doanh."
  },
  6: { 
    personality: "Đầu số mang tính chăm sóc và trách nhiệm, phù hợp với y tế, giáo dục, dịch vụ.",
    career: "Tốt cho các ngành: y tế, giáo dục, nhà hàng, khách sạn.",
    energy: "Tăng cường khả năng chăm sóc khách hàng và xây dựng lòng tin."
  },
  7: { 
    personality: "Đầu số kích thích trí tuệ và trực giác, phù hợp với nghiên cứu, tâm linh, công nghệ.",
    career: "Tốt cho các ngành: IT, nghiên cứu, tư vấn, y học cổ truyền.",
    energy: "Tăng cường khả năng phân tích và đưa ra quyết định sáng suốt."
  },
  8: { 
    personality: "Đầu số mang năng lượng thành công và quyền lực, phù hợp với kinh doanh lớn, đầu tư.",
    career: "Tốt cho các ngành: bất động sản, đầu tư, quản lý cấp cao, luật.",
    energy: "Thu hút cơ hội tài chính và tăng cường uy tín trong kinh doanh."
  },
  9: { 
    personality: "Đầu số mang tính nhân đạo và phục vụ, phù hợp với tổ chức phi lợi nhuận, giáo dục.",
    career: "Tốt cho các ngành: từ thiện, giáo dục, y tế cộng đồng, môi trường.",
    energy: "Tăng cường danh tiếng và khả năng tác động tích cực đến xã hội."
  }
};

const DOMINANT_DIGIT_MEANINGS = {
  0: { personality: "Số 0 thống trị: Tiềm năng vô hạn, khả năng tái sinh và bắt đầu mới." },
  1: { personality: "Số 1 thống trị: Khả năng lãnh đạo mạnh mẽ, độc lập và tiên phong." },
  2: { personality: "Số 2 thống trị: Khả năng hợp tác xuất sắc, nhạy cảm và kiên nhẫn." },
  3: { personality: "Số 3 thống trị: Khả năng giao tiếp và sáng tạo đặc biệt rõ nét." },
  4: { personality: "Số 4 thống trị: Tính thực tế cao, có tổ chức và đáng tin cậy." },
  5: { personality: "Số 5 thống trị: Tính tự do cao, thích thay đổi và phiêu lưu." },
  6: { personality: "Số 6 thống trị: Khả năng chăm sóc và trách nhiệm với gia đình rất cao." },
  7: { personality: "Số 7 thống trị: Trực giác mạnh mẽ, tính tâm linh và khả năng phân tích sâu." },
  8: { personality: "Số 8 thống trị: Tham vọng về vật chất và khả năng quản lý xuất sắc." },
  9: { personality: "Số 9 thống trị: Lòng bao dung cao, khả năng phục vụ cộng đồng mạnh mẽ." }
};

// Function đề xuất số điện thoại phù hợp
function suggestPhoneNumbers(options = {}) {
  const {
    name = '',
    birthDate = '',
    prefix = '',
    luckyNumbers = [],
    avoidNumbers = [],
    count = 10
  } = options;

  // Tính số chủ đạo và số biểu hiện của người dùng
  let lifePath = 0;
  let expression = 0;
  
  if (birthDate) {
    lifePath = calculateLifePath(birthDate);
  }
  
  if (name) {
    expression = calculateExpression(name);
  }

  // Đầu số Việt Nam phổ biến
  const vietnamesePrefix = [
    '096', '097', '098', '032', '033', '034', '035', '036', '037', '038', '039', // Vinaphone
    '090', '093', '070', '079', '077', '076', '078', // Mobifone  
    '091', '094', '083', '084', '085', '081', '082', '086', '088' // Viettel
  ];

  const suggestions = [];
  const usedNumbers = new Set();

  // Tạo số điện thoại
  for (let i = 0; i < count * 3; i++) {
    const phonePrefix = prefix || vietnamesePrefix[Math.floor(Math.random() * vietnamesePrefix.length)];
    let phoneNumber = phonePrefix;
    
    // Tạo 7 số cuối
    for (let j = 0; j < 7; j++) {
      let digit;
      if (luckyNumbers.length > 0 && Math.random() < 0.6) {
        // 60% cơ hội dùng số may mắn
        digit = luckyNumbers[Math.floor(Math.random() * luckyNumbers.length)];
      } else {
        // Tạo số ngẫu nhiên, tránh số không mong muốn
        do {
          digit = Math.floor(Math.random() * 10);
        } while (avoidNumbers.includes(digit) && Math.random() < 0.8);
      }
      phoneNumber += digit;
    }

    // Kiểm tra trùng lặp
    if (usedNumbers.has(phoneNumber)) continue;
    usedNumbers.add(phoneNumber);

    // Phân tích số điện thoại
    const analysis = analyzePhoneNumerology(phoneNumber);
    
    // Tính điểm tương thích
    let compatibilityScore = 0;
    let scoreDetails = [];

    if (lifePath > 0) {
      const lifePathCompatibility = Math.abs(analysis.analysis.mainNumber.number - lifePath);
      compatibilityScore += (10 - lifePathCompatibility) * 2;
      scoreDetails.push(`Hợp với số chủ đạo ${lifePath}: ${10 - lifePathCompatibility}/10`);
    }

    if (expression > 0) {
      const expressionCompatibility = Math.abs(analysis.analysis.personalNumber.number - expression);
      compatibilityScore += (10 - expressionCompatibility) * 1.5;
      scoreDetails.push(`Hợp với số biểu hiện ${expression}: ${10 - expressionCompatibility}/10`);
    }

    // Bonus cho số may mắn
    const phoneDigits = phoneNumber.split('').map(Number);
    const luckyCount = phoneDigits.filter(digit => luckyNumbers.includes(digit)).length;
    compatibilityScore += luckyCount * 1;
    
    // Penalty cho số tránh
    const avoidCount = phoneDigits.filter(digit => avoidNumbers.includes(digit)).length;
    compatibilityScore -= avoidCount * 2;

    // Bonus cho số đẹp (cặp đôi, dãy số...)
    if (hasBeautifulPattern(phoneNumber)) {
      compatibilityScore += 5;
      scoreDetails.push("Bonus số đẹp: +5");
    }

    suggestions.push({
      phoneNumber,
      analysis,
      compatibilityScore: Math.max(0, Math.round(compatibilityScore)),
      scoreDetails,
      rating: getPhoneRating(compatibilityScore)
    });
  }

  // Sắp xếp theo điểm tương thích
  suggestions.sort((a, b) => b.compatibilityScore - a.compatibilityScore);
  
  return suggestions.slice(0, count);
}

// Kiểm tra pattern đẹp
function hasBeautifulPattern(phoneNumber) {
  const digits = phoneNumber.substr(3); // Bỏ đầu số
  
  // Kiểm tra cặp đôi
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] === digits[i + 1]) return true;
  }
  
  // Kiểm tra dãy tăng/giảm
  for (let i = 0; i < digits.length - 2; i++) {
    const a = parseInt(digits[i]);
    const b = parseInt(digits[i + 1]);
    const c = parseInt(digits[i + 2]);
    
    if ((b === a + 1 && c === b + 1) || (b === a - 1 && c === b - 1)) {
      return true;
    }
  }
  
  return false;
}

// Đánh giá điểm số
function getPhoneRating(score) {
  if (score >= 25) return { level: 'excellent', text: 'Xuất sắc', color: '#27ae60' };
  if (score >= 20) return { level: 'good', text: 'Tốt', color: '#f39c12' };
  if (score >= 15) return { level: 'average', text: 'Khá', color: '#e67e22' };
  return { level: 'poor', text: 'Bình thường', color: '#e74c3c' };
}

// Export cho sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateLifePath,
    calculateExpression,
    calculateSoul,
    calculatePersonality,
    calculatePersonalYear,
    analyzeNumerology,
    analyzeCompatibility,
    analyzeNameNumerology,
    analyzePhoneNumerology,
    suggestPhoneNumbers,
    reduceToSingleDigit,
    LIFE_PATH_MEANINGS,
    PERSONAL_YEAR_MEANINGS
  };
}
