export const formatToNaira = (amount) => {
  if (isNaN(amount)) {
    return 'Invalid amount';
  }

  const formattedAmount = amount.toLocaleString('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  });

  return formattedAmount;
};

export const responsibilities = [
  'Create design concepts and drawings to determine the best product',
  'Present product ideas to relevant team members for brainstorming',
  'Suggest improvements to design and performance to product engineers',
  'Employ design concepts into functional prototypes',
  'Perform research on product technologies and structures to implement into design concepts',
  'Maintain up to date on current industry trends and market conditions',
  'Coordinate with designers to ensure accurate communication and efficiency in the design phase',
];

export const qualifications = [
  'Relevant work experience as a product designer is preferred',
  'Exceptional verbal and written communication skills',
  'Excellent eye for aesthetic design and customer appeal',
  'Good understanding of color science and combinations',
  'Artistic and innovative flair',
  'Excellent attention to detail',
  'Meticulous and diligent',
  'Strong knowledge of the industry and market trends',
  'Able to sit in front of a computer for long hours at a time',
];

export const mustHaves = [
  'Relevant work experience as a product designer is preferred',
  'Exceptional verbal and written communication skills',
  'Excellent eye for aesthetic design and customer appeal',
  'Good understanding of color science and combinations',
  'Artistic and innovative flair',
  'Excellent attention to detail',
  'Meticulous and diligent',
  'Strong knowledge of the industry and market trends',
  'Able to sit in front of a computer for long hours at a time',
];

export const benefits = [
  'Relevant work experience as a product designer is preferred',
  'Exceptional verbal and written communication skills',
  'Excellent eye for aesthetic design and customer appeal',
  'Good understanding of color science and combinations',
  'Artistic and innovative flair',
  'Excellent attention to detail',
  'Meticulous and diligent',
  'Strong knowledge of the industry and market trends',
  'Able to sit in front of a computer for long hours at a time',
];

export const aboutCompany =
  '  ATB Techsoft Solutions Limited, a leading firm in Information Technology industry in the metro area. We&apos;re pleased to have a 4.0 Glassdoor rating. We are looking to hire an experienced Product Designer to help us keep growing. If you&apos;re hard-working and dedicated, ATB Techsoft Solutions Limited, is an ideal place to get ahead. Apply today!';

export const jobTitle = 'Product designer';
