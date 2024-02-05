document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.FAQtab .arrow').forEach(function(arrow) {
        arrow.addEventListener('click', function() {
            var content = this.parentNode.nextElementSibling;
            this.style.transition = 'transform 0.3s ease-in-out'; // Add transition property
            this.style.transform = this.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
            
            setTimeout(function() {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            }, 300);
        });
    });
});