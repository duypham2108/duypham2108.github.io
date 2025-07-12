import { PiNewspaper } from 'react-icons/pi';
import {
  HiOutlineBookOpen,
  HiOutlineChip,
  HiOutlineCode,
} from 'react-icons/hi';
import { BiDna, BiCode, BiChip, BiArchive } from 'react-icons/bi';
import { skeleton } from '../../utils';

// Icon mapping object
const ICON_MAP = {
  BiDna,
  BiCode,
  BiChip,
  BiArchive,
  HiOutlineBookOpen,
  HiOutlineChip,
  HiOutlineCode,
};

type IconName = keyof typeof ICON_MAP;

interface BlogEntry {
  title: string;
  link: string;
  icon: IconName;
}

interface BlogTopic {
  name: string;
  icon: IconName;
  entries: BlogEntry[];
}

interface BlogCardProps {
  loading: boolean;
  topics?: BlogTopic[];
}

const BlogCard = ({ loading, topics = [] }: BlogCardProps) => {
  const renderIcon = (iconName: IconName) => {
    const IconComponent = ICON_MAP[iconName];
    return IconComponent ? <IconComponent className="text-primary" /> : null;
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-white shadow-lg border border-base-200 transition-all duration-300">
        <div className="card-body p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center space-x-4">
              {loading ? (
                skeleton({
                  widthCls: 'w-12',
                  heightCls: 'h-12',
                  className: 'rounded-xl',
                })
              ) : (
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl transform transition-transform duration-300 hover:rotate-3">
                  <PiNewspaper className="text-2xl text-primary" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-28', heightCls: 'h-8' })
                    : 'My Blog Posts'}
                </h3>
              </div>
            </div>
          </div>
          <div className="prose max-w-none space-y-8">
            {loading ? (
              <div className="space-y-4">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="space-y-3">
                    {skeleton({ widthCls: 'w-3/4', heightCls: 'h-4' })}
                    {skeleton({ widthCls: 'w-1/2', heightCls: 'h-4' })}
                  </div>
                ))}
              </div>
            ) : (
              topics.map((topic, topicIndex) => (
                <div key={topicIndex}>
                  <div className="flex items-center gap-2 bg-primary/5 p-3 rounded-lg mb-6">
                    <div className="text-2xl">{renderIcon(topic.icon)}</div>
                    <h4 className="text-primary font-semibold m-0">
                      {topic.name}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {topic.entries.map((entry, entryIndex) => (
                      <li key={entryIndex} className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-base-200 rounded-lg">
                          <div className="text-lg">
                            {renderIcon(entry.icon)}
                          </div>
                        </div>
                        <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-focus transition-colors duration-200"
                        >
                          {entry.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
