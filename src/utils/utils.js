import Swal from 'sweetalert2';

export function showAlert(text, icon = 'info') {
  Swal.fire({
    icon,
    text,
  });
}