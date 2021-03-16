// array
const inputs = document.querySelectorAll('.controller input');

function handleUpdate() {
    const stufffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + stufffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))