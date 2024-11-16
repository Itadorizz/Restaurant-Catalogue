import RestoDbSource from '../data/restodb-source';
import UrlParser from '../routes/url-parser';

const ReviewHandler = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputName = document.querySelector('#inputName');
  const inputReview =  document.querySelector('#inputReview');
  const reviewContainer = document.querySelector('.detail-resto-review');

  const dataInput = {
    id: url.id,
    name: inputName.value,
    review: inputReview.value,
  };


  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const reviewUser = `
    <div class="detail-review-item">
      <div class="review-header">
        <p class="review-name">${dataInput.name}</p>
        <p class="review-date">${date}</p>
      </div>
      <div class="body-review">
        ${dataInput.review}
      </div>
    </div>
    `;

  await RestoDbSource.ReviewInput(dataInput);
  reviewContainer.innerHTML += reviewUser;
  inputName.value ='';
  inputReview.value ='';
};

export default ReviewHandler;

