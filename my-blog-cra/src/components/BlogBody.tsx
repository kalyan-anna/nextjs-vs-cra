import ReactMarkdown from 'react-markdown';
import markdownStyles from './BlogBody.module.scss';

type Props = {
  content: string;
};

export const BlogBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ReactMarkdown
        children={content}
        className={markdownStyles['markdown']}
      />
    </div>
  );
};
