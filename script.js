const input = document.querySelector('#fileInput');
const userImage = document.querySelector('#userImage');

input.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      userImage.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});
