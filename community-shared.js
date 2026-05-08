(function () {
  var STORAGE_KEY = 'listiq_community_v1';
  var DISPLAY_NAME_KEY = 'listiq_community_display_name';
  var SESSION_VIEWS = 'listiq_comm_views_sess';

  var SUGGEST_NAMES = [
    'Priya Sharma', 'Arjun Mehra', 'Kavya Iyer', 'Rahul Khanna', 'Ananya Das',
    'Vikram Patel', 'Neha Kapoor', 'Aditya Menon', 'Shruti Reddy', 'Karan Joshi',
    'Meera Nair', 'Siddharth Bose', 'Divya Krishnan', 'Rohan Verma', 'Pooja Singh'
  ];

  window.COMMUNITY_THREADS = [
    {
      id: 'smartworld-gems-s89',
      title: 'Smartworld Gems Sector 89 Gurgaon — end-user views on pricing & possession?',
      excerpt: 'Visited the site office twice. Broker quoted different BSP both times. Want to hear from people who have booked or are seriously comparing with NH-8 micro-markets.',
      body: 'Hi everyone,\n\nWe are an end-user family looking at Smartworld Gems in Sector 89, Gurgaon (around 3–3.5 Cr budget for a larger 3BHK).\n\nTwo visits to the site office — BSP quote changed slightly between visits (PLC corner vs middle floor explained differently). Construction pace looks fine from outside but hard to judge finish quality.\n\nSpecifically:\n• How aggressive are Payment Plans right now vs six months ago?\n• Any clarity on possession timeline — marketing says ~24 months but sales team sounded cautious.\n• Compared to older ready inventory near Dwarka Expressway — is the premium mainly brand + specs?\n\nWould really appreciate honest inputs from residents / fellow buyers in the area. Thanks!',
      author: 'Arjun Mehra',
      handle: 'arjun_m',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      createdLabel: 'Posted 4 days ago',
      tags: ['Gurgaon', 'New launch', 'End-user'],
      likes: 38,
      views: 2120,
      replies: [
        { author: 'Kavya Iyer', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', timeLabel: '4 days ago', body: 'We booked a middle floor in Dec last year. Payment plan was relaxed compared to now — ask them to match older slab if you have leverage. Always get PLC break-up on email.' },
        { author: 'Rohan Verma', avatar: 'https://randomuser.me/api/portraits/men/76.jpg', timeLabel: '3 days ago', body: 'NH-8 ready resale still trades at a discount vs fresh launches. If schools + commute matter, Sector 89 connectivity is decent but traffic peaks add 15–20 min on bad days.' },
        { author: 'Neha Kapoor', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', timeLabel: '3 days ago', body: 'Sales will never commit possession on stamp paper unless RERA filing matches. Cross-check tower-wise RERA dates — ours showed a slightly wider band than what RM said verbally.' },
        { author: 'Aditya Menon', avatar: 'https://randomuser.me/api/portraits/men/52.jpg', timeLabel: '2 days ago', body: 'Finish samples at site office looked above average for the ticket size. Still worth pushing for specs list addendum — AC points, kitchen loft heights, balcony drainage.' },
        { author: 'Meera Nair', avatar: 'https://randomuser.me/api/portraits/women/90.jpg', timeLabel: '2 days ago', body: 'Checked loan subsidy eligibility with two banks — documentation differed slightly; worth clarifying before booking token.' },
        { author: 'Siddharth Bose', avatar: 'https://randomuser.me/api/portraits/men/67.jpg', timeLabel: '1 day ago', body: 'If comparing with resale nearby, factor in society sinking fund top-ups — older towers sometimes surprise you post-move.' },
        { author: 'Divya Krishnan', avatar: 'https://randomuser.me/api/portraits/women/12.jpg', timeLabel: '1 day ago', body: 'Parking allocation wasn\u2019t clear on floor plan — insist on bay number band before DD.' },
        { author: 'Rahul Khanna', avatar: 'https://randomuser.me/api/portraits/men/14.jpg', timeLabel: '12 hr ago', body: 'We walked the approach road during evening rush — acceptable for us but worth doing twice before signing.' },
        { author: 'Pooja Singh', avatar: 'https://randomuser.me/api/portraits/women/72.jpg', timeLabel: '8 hr ago', body: 'Club membership annual fee was buried in brochure fine print — ask for consolidated five-year cost sheet.' }
      ]
    },
    {
      id: 'dwarka-expressway-ready-vs-fresh',
      title: 'Dwarka Expressway — ready resale vs under-construction: what broke your tie?',
      excerpt: 'First-time buyer. EMI stretch either way. Worried about rental yield if we take ready but ticket jumps sharply.',
      body: 'Family of four, probably shifting from East Delhi next year.\n\nNarrowed down to:\nA) Ready ~10 yr society — higher ticket, immediate shift, visible maintenance culture.\nB) Fresh launch — lower entry, longer wait, payment plan easier on cash flow.\n\nHow did you weigh rental drift vs construction risk? Any checklist you wish you had used before signing?',
      author: 'Priya Sharma',
      handle: 'priya_s',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      createdLabel: 'Posted 1 week ago',
      tags: ['NCR', 'First-time buyer'],
      likes: 27,
      views: 1580,
      replies: [
        { author: 'Vikram Patel', avatar: 'https://randomuser.me/api/portraits/men/41.jpg', timeLabel: '6 days ago', body: 'We picked ready because schools admission timeline did not wait for possession. Paid premium but slept better — maintenance receipts told us how serious RWA is.' },
        { author: 'Shruti Reddy', avatar: 'https://randomuser.me/api/portraits/women/33.jpg', timeLabel: '5 days ago', body: 'Under-construction worked because PF + staggered DP matched salary hikes. Locked rate early; downside was 14 months delay vs brochure.' },
        { author: 'Karan Joshi', avatar: 'https://randomuser.me/api/portraits/men/22.jpg', timeLabel: '5 days ago', body: 'Whatever you choose — visit society at 8pm weekday once. Parking wars tell you more than brochure renders.' },
        { author: 'Neha Kapoor', avatar: 'https://randomuser.me/api/portraits/women/28.jpg', timeLabel: '4 days ago', body: 'Stamp duty slabs changed mid-year for us — budget 1% buffer on registry side.' },
        { author: 'Arjun Mehra', avatar: 'https://randomuser.me/api/portraits/men/36.jpg', timeLabel: '4 days ago', body: 'Lawyer fee varies — flat vs percentage of deal; negotiate upfront package including mutation draft.' },
        { author: 'Ananya Das', avatar: 'https://randomuser.me/api/portraits/women/40.jpg', timeLabel: '3 days ago', body: 'If fresh launch, ask for construction-linked vs time-linked — impacts cash flow if delay happens.' },
        { author: 'Aditya Menon', avatar: 'https://randomuser.me/api/portraits/men/59.jpg', timeLabel: '3 days ago', body: 'We measured carpet manually on ready unit — brochure super area ratio didn\u2019t match; saved us wrong expectation.' },
        { author: 'Shruti Reddy', avatar: 'https://randomuser.me/api/portraits/women/63.jpg', timeLabel: '2 days ago', body: 'Don\u2019t skip electrical load sanctioned vs AC count — upgrades cost later.' },
        { author: 'Vikram Patel', avatar: 'https://randomuser.me/api/portraits/men/71.jpg', timeLabel: '1 day ago', body: 'Rent-before-buy trial month in micro-market helped — schools + commute stress-tested practically.' }
      ]
    },
    {
      id: 'rera-oc-staggered-possession',
      title: 'Staggered possession / OC timeline — red flags you noticed too late?',
      excerpt: 'Tower A OC announced but Tower B still waiting. Builder citing dependencies. Trying to separate noise from genuine delays.',
      body: 'Booked in a phased project (Noida expressway belt). Tower A got OC — Tower B soft possession pushed twice.\n\nBuilder cites lift certification + fire NOC dependency common across towers. Payment demand schedule still aggressive.\n\nHas anyone negotiated freeze on penal interest / holding charges in similar situation? What docs actually helped?',
      author: 'Siddharth Bose',
      handle: 'sid_b',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
      createdLabel: 'Posted 6 days ago',
      tags: ['Noida', 'RERA', 'Possession'],
      likes: 45,
      views: 2890,
      replies: [
        { author: 'Meera Nair', avatar: 'https://randomuser.me/api/portraits/women/56.jpg', timeLabel: '5 days ago', body: 'Lawyer had us reference RERA quarterly filing vs builder letters. When mismatch appeared, forum mediation moved faster than endless emails.' },
        { author: 'Divya Krishnan', avatar: 'https://randomuser.me/api/portraits/women/17.jpg', timeLabel: '5 days ago', body: 'Join buyer WhatsApp only after verifying couple of folks against registry copies — mixed quality otherwise.' },
        { author: 'Rahul Khanna', avatar: 'https://randomuser.me/api/portraits/men/63.jpg', timeLabel: '4 days ago', body: 'Penal clauses vary wildly — some are linked to OC date of YOUR tower only; ours was ambiguous until addendum.' },
        { author: 'Priya Sharma', avatar: 'https://randomuser.me/api/portraits/women/77.jpg', timeLabel: '4 days ago', body: 'Demand letters vs actual progress photos — date-stamped walkthrough helped our case file.' },
        { author: 'Karan Joshi', avatar: 'https://randomuser.me/api/portraits/men/29.jpg', timeLabel: '3 days ago', body: 'Bank disbursement linked stages — verify builder billing matches slab casting certs.' },
        { author: 'Neha Kapoor', avatar: 'https://randomuser.me/api/portraits/women/95.jpg', timeLabel: '3 days ago', body: 'Soft possession without OC — insurance implications for interiors; check policy wording.' },
        { author: 'Arjun Mehra', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', timeLabel: '2 days ago', body: 'Lift commissioning certificates often lag — affects fit-out mover slots.' },
        { author: 'Vikram Patel', avatar: 'https://randomuser.me/api/portraits/men/88.jpg', timeLabel: '2 days ago', body: 'Joint buyer representation in RERA forum stronger — pooled legal split costs.' },
        { author: 'Kavya Iyer', avatar: 'https://randomuser.me/api/portraits/women/31.jpg', timeLabel: '1 day ago', body: 'Fire NOC dependency chain — ask for submitted authority receipt copies, not just \"applied\".' },
        { author: 'Siddharth Bose', avatar: 'https://randomuser.me/api/portraits/men/11.jpg', timeLabel: '18 hr ago', body: 'Partial OC tower-wise — clarify parking podium common areas allocation before taking keys.' }
      ]
    },
    {
      id: 'blr-whitefield-traffic-amenities',
      title: 'Whitefield ORR stretch — amenity-heavy project vs closer to Metro?',
      excerpt: 'WFH ending hybrid. 1.2–1.6 Cr range. Debating clubhouse vs saved commute.',
      body: 'Working near Bagmane / KR Puram side.\n\nOption X: gated community with strong clubhouse + coworking but +15 min drive.\nOption Y: older society walking distance to Purple line — fewer fancy specs.\n\nHow much premium is justified for amenities if commute drops by 25 min daily?\n\nAlso — STP + borewell dependency — any society audit checklist?',
      author: 'Ananya Das',
      handle: 'ananya_d',
      avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
      createdLabel: 'Posted 3 days ago',
      tags: ['Bengaluru', 'End-user'],
      likes: 22,
      views: 940,
      replies: [
        { author: 'Aditya Menon', avatar: 'https://randomuser.me/api/portraits/men/85.jpg', timeLabel: '2 days ago', body: 'We chose Metro walk — gym membership outside still cheaper than EMIs on amenity premium for our usage pattern.' },
        { author: 'Pooja Singh', avatar: 'https://randomuser.me/api/portraits/women/89.jpg', timeLabel: '2 days ago', body: 'Ask last 6 months water tanker bills + STP logs if society shares them. Random weekday visit post rain tells drainage story.' },
        { author: 'Rohan Verma', avatar: 'https://randomuser.me/api/portraits/men/74.jpg', timeLabel: '2 days ago', body: 'Power backup cap — check if AC allowed on DG or only lights/fans.' },
        { author: 'Meera Nair', avatar: 'https://randomuser.me/api/portraits/women/50.jpg', timeLabel: '1 day ago', body: 'ORR widening dust phase lasted longer than expected — worth asking neighbors timeline.' },
        { author: 'Kavya Iyer', avatar: 'https://randomuser.me/api/portraits/women/36.jpg', timeLabel: '1 day ago', body: 'Society WhatsApp archive search — keyword \"leak\" \"lift\" before deciding.' },
        { author: 'Siddharth Bose', avatar: 'https://randomuser.me/api/portraits/men/69.jpg', timeLabel: '14 hr ago', body: 'Kids play area vs traffic-facing tower — site plan orientation matters more than brochure renders.' },
        { author: 'Divya Krishnan', avatar: 'https://randomuser.me/api/portraits/women/24.jpg', timeLabel: '10 hr ago', body: 'EV charging provision — even if you don\u2019t own EV, resale buyers increasingly ask.' }
      ]
    },
    {
      id: 'home-loan-spread-fixed-float',
      title: 'Home loan — switching from fixed to floating after two hikes?',
      excerpt: 'Sanctioned 2024. Spread feels wide vs what friends got. Bank says revision only on anniversary.',
      body: 'Loan outstanding ~65L. Original spread repo + 2.35. Now seeing ads at repo + 1.9 for similar profile.\n\nBank RM says conversion fee applies + reset only on sanction anniversary.\n\nDid balance transfer pencil out for anyone at ~70L scale once processing fee + insurance bundled? Any negotiation script that actually worked with PSU branch?',
      author: 'Karan Joshi',
      handle: 'karan_j',
      avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
      createdLabel: 'Posted 2 days ago',
      tags: ['Home loan', 'India'],
      likes: 31,
      views: 1340,
      replies: [
        { author: 'Neha Kapoor', avatar: 'https://randomuser.me/api/portraits/women/21.jpg', timeLabel: '1 day ago', body: 'BT worked after we netted spread saving >0.35 + waived processing as year-end target quota. YMMV with insurance bundling.' },
        { author: 'Vikram Patel', avatar: 'https://randomuser.me/api/portraits/men/91.jpg', timeLabel: '1 day ago', body: 'PSU branch managers often have discretion on conversion fee if you escalate with competing sanction letter — polite but firm.' },
        { author: 'Arjun Mehra', avatar: 'https://randomuser.me/api/portraits/men/43.jpg', timeLabel: '20 hr ago', body: 'Insurance bundled — compare standalone term vs lender bundle; sometimes cheaper outside.' },
        { author: 'Priya Sharma', avatar: 'https://randomuser.me/api/portraits/women/54.jpg', timeLabel: '18 hr ago', body: 'Women borrower concession — verify if applicable on ROI or only processing fee waiver.' },
        { author: 'Rahul Khanna', avatar: 'https://randomuser.me/api/portraits/men/57.jpg', timeLabel: '15 hr ago', body: 'Part-prepayment rules — some loans reset tenure vs EMI default differently.' },
        { author: 'Ananya Das', avatar: 'https://randomuser.me/api/portraits/women/47.jpg', timeLabel: '12 hr ago', body: 'Floating reset frequency quarterly vs annual — small print changes monthly outgo materially.' },
        { author: 'Aditya Menon', avatar: 'https://randomuser.me/api/portraits/men/83.jpg', timeLabel: '8 hr ago', body: 'Co-applicant credit score pull — avoid multiple hard enquiries same month across banks.' },
        { author: 'Shruti Reddy', avatar: 'https://randomuser.me/api/portraits/women/91.jpg', timeLabel: '6 hr ago', body: 'Sanction validity extension fee — negotiate waiver if delay is from their underwriting backlog.' }
      ]
    }
  ];

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { v: 1, liked: {}, userComments: {}, viewBoost: {} };
      var o = JSON.parse(raw);
      if (!o || o.v !== 1) return { v: 1, liked: {}, userComments: {}, viewBoost: {} };
      o.liked = o.liked || {};
      o.userComments = o.userComments || {};
      o.viewBoost = o.viewBoost || {};
      return o;
    } catch (e) {
      return { v: 1, liked: {}, userComments: {}, viewBoost: {} };
    }
  }

  function saveState(s) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  }

  function getThread(id) {
    var list = window.COMMUNITY_THREADS || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function sessionViewKey(id) {
    return SESSION_VIEWS + ':' + id;
  }

  function recordThreadView(id) {
    try {
      if (!sessionStorage.getItem(sessionViewKey(id))) {
        sessionStorage.setItem(sessionViewKey(id), '1');
        var s = loadState();
        s.viewBoost[id] = (s.viewBoost[id] || 0) + 1;
        saveState(s);
      }
    } catch (e) { /* private mode */ }
  }

  function effectiveLikes(thread) {
    var s = loadState();
    var base = thread.likes;
    return base + (s.liked[thread.id] ? 1 : 0);
  }

  function effectiveViews(thread) {
    var s = loadState();
    return thread.views + (s.viewBoost[thread.id] || 0);
  }

  function effectiveCommentCount(thread) {
    var s = loadState();
    var extra = (s.userComments[thread.id] || []).length;
    return (thread.replies || []).length + extra;
  }

  function isLiked(threadId) {
    return !!loadState().liked[threadId];
  }

  function toggleLike(threadId) {
    var s = loadState();
    if (s.liked[threadId]) delete s.liked[threadId];
    else s.liked[threadId] = true;
    saveState(s);
    return !!s.liked[threadId];
  }

  function getUserComments(threadId) {
    return loadState().userComments[threadId] || [];
  }

  function addUserComment(threadId, authorName, body) {
    var text = (body || '').trim();
    if (!text) return false;
    var s = loadState();
    if (!s.userComments[threadId]) s.userComments[threadId] = [];
    s.userComments[threadId].push({
      id: 'uc_' + Date.now(),
      author: authorName || 'You',
      body: text,
      timeLabel: 'Just now'
    });
    saveState(s);
    return true;
  }

  function getDisplayName() {
    return localStorage.getItem(DISPLAY_NAME_KEY) || '';
  }

  function setDisplayName(name) {
    var t = (name || '').trim();
    if (t) localStorage.setItem(DISPLAY_NAME_KEY, t);
    else localStorage.removeItem(DISPLAY_NAME_KEY);
  }

  function suggestDisplayName() {
    var i = Math.floor(Math.random() * SUGGEST_NAMES.length);
    return SUGGEST_NAMES[i];
  }

  function fmtNum(n) {
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'k';
    return String(n);
  }

  function iconHeart(filled) {
    if (filled) return '<svg width="18" height="18" viewBox="0 0 24 24" fill="#DC2626" aria-hidden="true"><path d="M12 21s-6.716-4.548-9.326-8.364C.62 9.62 1.5 6 4.296 6 6.12 6 8 7.356 12 11.044 16 7.356 17.88 6 19.704 6 22.5 6 23.38 9.62 21.326 12.636 18.716 16.452 12 21 12 21z"/></svg>';
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-6.716-4.548-9.326-8.364C.62 9.62 1.5 6 4.296 6 6.12 6 8 7.356 12 11.044 16 7.356 17.88 6 19.704 6 22.5 6 23.38 9.62 21.326 12.636 18.716 16.452 12 21 12 21z"/></svg>';
  }

  function iconComment() {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>';
  }

  function iconEye() {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>';
  }

  window.CommunityStore = {
    loadState: loadState,
    getThread: getThread,
    recordThreadView: recordThreadView,
    effectiveLikes: effectiveLikes,
    effectiveViews: effectiveViews,
    effectiveCommentCount: effectiveCommentCount,
    isLiked: isLiked,
    toggleLike: toggleLike,
    getUserComments: getUserComments,
    addUserComment: addUserComment,
    getDisplayName: getDisplayName,
    setDisplayName: setDisplayName,
    suggestDisplayName: suggestDisplayName,
    fmtNum: fmtNum,
    iconHeart: iconHeart,
    iconComment: iconComment,
    iconEye: iconEye
  };
})();
