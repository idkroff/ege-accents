import * as SwalBare from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const defaultParams = {
    background: 'var(--bg-color)',
    color: 'var(--font-color)',
    showConfirmButton: false
};

class Swal extends withReactContent(SwalBare) {
    static show(params = {}) {
        this.fire(Object.assign(defaultParams, params));
    }
}

export default Swal;