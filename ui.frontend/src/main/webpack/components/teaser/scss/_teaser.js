function setRating(ratingElement) {
            const stars = ratingElement.querySelectorAll('.star');
            const rating = parseFloat(ratingElement.querySelector('.rating-number').textContent);
            console.log(rating);
            stars.forEach((star, index) => {
                const fullStar = star.querySelector('.full-star');
                const starIndex = index + 1;

                if (starIndex <= rating) {
                    fullStar.style.width = '100%';
                } else if (starIndex - rating < 1) {
                    const fractionalRating = rating - Math.floor(rating);

                    // Calculate the width based on the fractional part
                    const widthPercentage = (fractionalRating * 88) + '%';

                    // Set the width of fullStar
                    fullStar.style.width = widthPercentage;
                } else {
                    fullStar.style.width = '0';
                }
            });
        }

        console.log(document.querySelectorAll('.rating-container'));

        document.querySelectorAll('.rating-container').forEach(container => {
            setRating(container);
        });