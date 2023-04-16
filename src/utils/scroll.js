export const toggleBodyScroll = (disable) => {
  if (disable) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
};
