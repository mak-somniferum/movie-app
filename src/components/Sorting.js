import { Form } from 'react-bootstrap';

function Sorting({ sorting, onSelect }){

  const sort = [
    {
      name: 'title',
      text: '제목'
    },{
      name: 'year',
      text: '연도'
    },{
      name: 'rating',
      text: '평점'
    },{
      name: 'download_count',
      text: '다운로드'
    },{
      name: 'like_count',
      text: '좋아요'
    }
  ]

  return (
    <Form.Group className="mt-3" onChange={() => {
      console.log(sort.name)
      onSelect(sort.name);
    }}>
      <Form.Label className="d-none">보기 순서</Form.Label>
      <Form.Select>
        <option value="">보기 순서</option>
        {sort.map(option => (
          <option key={option.name} value={option.name}>{option.text}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default Sorting;