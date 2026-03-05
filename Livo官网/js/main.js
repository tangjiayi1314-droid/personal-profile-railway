(function () {
  'use strict';

  // 下载按钮弹框：敬请期待
  var modal = document.getElementById('downloadModal');
  var downloadBtns = document.querySelectorAll('.hero-buttons .btn-download');
  var modalOverlay = modal && modal.querySelector('.modal-overlay');
  var modalClose = modal && modal.querySelector('.modal-close');

  function openModal() {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (downloadBtns.length) {
    downloadBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });
  }

  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // 热门漫画横向滚动
  var popularScroll = document.getElementById('popularScroll');
  var btnPrev = document.querySelector('.btn-arrow-prev');
  var btnNext = document.querySelector('.btn-arrow-next');

  if (popularScroll && btnPrev && btnNext) {
    var scrollStep = 340; // 约一张卡片宽度 + gap

    btnPrev.addEventListener('click', function () {
      popularScroll.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });

    btnNext.addEventListener('click', function () {
      popularScroll.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });
  }

  // 订阅表单：邮箱校验与前端提示
  var form = document.getElementById('subscribeForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[name="email"]');
      var email = input && input.value ? input.value.trim() : '';

      if (!email) {
        alert('请输入邮箱地址');
        if (input) input.focus();
        return;
      }

      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) {
        alert('请输入有效的邮箱地址');
        if (input) input.focus();
        return;
      }

      // 暂无后端：仅前端提示
      alert('订阅成功！我们会将更新发送至：' + email);
      input.value = '';
    });
  }
})();
