import FeedMonitor from "@/components/Atoms/FeedMonitor";
import SpeakerSystem from "@/components/Atoms/SpeakerSystem";
import Settings from "@/components/Atoms/Settings";
import ChapterSystem from "@/components/Atoms/ChapterSystem";
import { container, subContainer } from './style.css';
import ManageNavbar from '@/components/layout/ManageNavBar';

const Manage = () => {
    return (
      <div>
      <ManageNavbar />
      <div className={container}>
        <div className={subContainer}>
          <FeedMonitor />
          <SpeakerSystem />
          <Settings />
        </div>        
        <ChapterSystem />
      </div>
      </div>
      
    );
  };
  export default Manage;
  