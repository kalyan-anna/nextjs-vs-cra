import markdownStyles from './BlogBody.module.scss';

type Props = {
  content: string;
};

export const BlogBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
