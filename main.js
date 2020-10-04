const inputs = document.querySelectorAll('.colors input');

function handleUpdate() {
    
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousechange', handleUpdate))