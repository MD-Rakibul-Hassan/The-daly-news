
import Navbar from '../../Components/Navbar/Navbar'
import Page_Header from '../../Components/Page_Header/Page_Header'
import MainContent from './MainContent/MainContent'
import SideBar from './SideBar/SideBar'

const Home = () => {
  return (
    <div>
      <header>
        {/* Logo here  */}
        <Page_Header />
        {/* Navbar  */}
        <Navbar />
        {/* Home Content  */}
        <div className='flex gap-5 flex-col lg:flex-row mt-5 lg:mt-10'>

          <div className='w-[30%] hidden lg:block'>
            <SideBar />
          </div>
          <div className=' w-full lg:w-[70%]  '>
            <MainContent />
          </div>

        </div>
      </header>
    </div>
  )
}

export default Home