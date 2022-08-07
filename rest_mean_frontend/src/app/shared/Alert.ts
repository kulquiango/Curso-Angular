import Swal from 'sweetalert2';
export const Alert = (icon: any, title: string, text: string) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
  });
};
