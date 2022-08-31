import { DateFormatter } from './DateFormatter';

type Props = {
  title: string;
  date: string;
};

export const BlogHeader = ({ title, date }: Props) => {
  return (
    <>
      <h1 className="text-8xl font-bold tracking-tighter leading-tight mb-12 text-center">
        {title}
      </h1>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};
