import axios from "axios";

const getProductList = () => {
  axios.get('/products');
};

const getProductInfo = (id = 37311) => {
  return axios.get(`/products/${id}`);
};

const getProductStyles = (id = 37311) => {
  return axios.get(`/products/${id}/styles`);
};

const getRelatedProducts = (id = 37311) => {
  return axios.get(`/products/${id}/related`);
};

const getQA = (id = 37311) => {
  return axios.get(`/qa/questions?product_id=${id}`);
};

const getReviewMetaData = (id = 37311) => {
  return axios.get(`/reviews/meta?product_id=${id}`);
};

const getReviewsOfProduct = (id = 37311, sortString = "relevant", count = 20) => {
  return axios.get(
    `/reviews/?product_id=${id}&sort=${sortString}:asc&count=${count}}`
  );
};

const reportReview = (reviewId) => {
  return axios.put(`/reviews/${reviewId}/report`);
};

const postReview = (
  id = 37311,
  rating,
  summary,
  body,
  recommend,
  name,
  email,
  photos,
  characteristics
) => {
  return axios.post(`/reviews?product_id=${id}`, {
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: photos,
    characteristics: characteristics,
  });
};

const getCart = (userToken) => {
  return axios.get(`/cart/${userToken}`);
};

const addToCart = (user_token, sku_id) => {
  console.log(user_token);
  console.log(sku_id);
  return axios.post(`/cart/`, {
    user_token: user_token,
    sku_id: sku_id,
  });
};

const getSpecificAnswers = (questionId) => {
  return axios.get(`/qa/questions/${questionId}/answers`);
};

const askQuestion = (id, text, name, email) => {
  return axios.post(`/qa/questions?product_id=${id}`, {
    body: text,
    name: name,
    email: email,
  });
};

const answerQuestion = (questionId, text, name, email, photos = []) => {
  return axios.post(`/qa/questions/${questionId}/answers`, {
    body: text,
    name: name,
    email: email,
    photos: photos,
  });
};

const markQAsHelpful = (questionId) => {
  return axios.put(`/qa/questions/${questionId}/helpful`);
};

const reportQuestion = (questionId) => {
  return axios.put(`/qa/questions/${questionId}/report`);
};

const markAnsAsHelpful = (answerID) => {
  return axios.put(`/qa/answers/${answerID}/helpful`);
};

const reportAns = (answerID) => {
  return axios.put(`/qa/answers/${answerID}/report`);
};

const apiMaster = {
  getProductList: getProductList,
  getProductInfo: getProductInfo,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts,
  getQA: getQA,
  getSpecificAnswers: getSpecificAnswers,
  askQuestion: askQuestion,
  answerQuestion: answerQuestion,
  markQAsHelpful: markQAsHelpful,
  reportQuestion: reportQuestion,
  markAnsAsHelpful: markAnsAsHelpful,
  reportAns: reportAns,
  getReviewMetaData: getReviewMetaData,
  getReviewsOfProduct: getReviewsOfProduct,
  postReview: postReview,
  reportReview: reportReview,
  getCart: getCart,
  addToCart: addToCart,
};

export default apiMaster;
