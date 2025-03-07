import React from "react";
import PageTitle from "../Header/PageTitle";
import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import More from "../Home/More";

const Aboutus = () => {
  return (
    <div>
      <PageTitle page="About" title="Who We Are" />
      <div className="lg:container px-6 lg:px-0 mx-auto mb-6 font-extralight">
        <h1 className="sm:text-4xl text-2xl font-bold pt-24 mb-4">Welcome to CVDS Nepal</h1>

        {/* <p className="text-gray-700 text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-white first-letter:bg-orange-600 first-letter:p-4 first-letter:rounded-md first-letter:float-left first-letter:mr-3">
          People with disability are the most vulnerable and marginalized group
          of people. They live in isolation, segregation, disparagement,
          poverty, and virtual dependence on charity and even pity. They are the
          victims of community misconceptions and stigmas denying them their
          inalienable and recognized rights. As a result, they shut themselves
          from the world and they underestimate...
        </p> */}
        <div className="flex items-start justify-start gap-3 ">
          <p className="text-justify text-sm sm:text-xl font-extralight sm:leading-9 leading-6 first-letter:text-6xl first-letter:font-bold first-letter:text-white first-letter:bg-orange-600 first-letter:p-4 first-letter:font-serif first-letter:float-left first-letter:mr-3">
            People with disability are the most vulnerable and marginalized
            group of people. They live in isolation, segregation, disparagement,
            poverty and virtual dependence on charity and even pity. They are
            the victim of the community misconception and stigmas denying them
            of their inalienable and recognized rights. As a result, they shut
            themselves from the world and they underestimate themselves thinking
            that they do not fit in the society like other able-bodied children.
          </p>
        </div>
        <p className="text-justify sm:text-xl text-sm font-extralight sm:leading-9 leading-6 mt-2 ">
          Thus, it becomes a painful reality how there is limited involvement or
          we can find no involvement of their parents or guardians in
          formulation and implementation of the policies related to them. In
          addition, the programs introduced by the Government have not
          benefitted them much. Therefore, non-governmental organizations have
          been providing care and different needed support activities targeting
          people with disabilities.
        </p>
        <p className="text-justify sm:text-xl text-sm font-extralight sm:leading-9 leading-6 mt-2">
          Conflict Victim and Disable Society (CVDS-Nepal) is one of these non-
          profit organizations located at Shankarapur Municipality-6,
          Shalambutar,Sankhu,Kathmandu.This organization has been devoting
          unceasingly with the aim of supporting the people with disability in
          Nepal since 2005. The organization has been providing food, clothes,
          shelter, basic care and support to till date mentally and physically
          disabled children through the ‘Rehabilitation Center for Children with
          disability due to Cerebral Palsy (CP)’ project.
        </p>

        <h1 className="sm:text-4xl text-2xl font-bold pt-24 mb-4">Vision</h1>
        <div className="flex items-start justify-start gap-3 ">
          <p className="text-justify text-sm sm:text-xl font-extralight sm:leading-9 leading-6 first-letter:text-6xl first-letter:font-bold first-letter:text-white first-letter:bg-[#0097c2] first-letter:p-4 first-letter:rounded-md first-letter:float-left first-letter:mr-3">
            Children with disability due to Cerebral Palsy by making them
            capable enough to lead an independent life thereby mainstreaming
            them towards national development.
          </p>
        </div>
      </div>
      <div className="bg-[#f7f7f7] py-32 font-extralight">
        <div className="px-6 lg:px-0 lg:container mx-auto leading-9 font-extralight">
          <div className="w-22 ">
            <img
              className="w-full h-full"
              src="https://cvdsnepal.org.np/assets/media/general/ui-decor-1.png"
              alt=""
            />
          </div>
          <h1 className=" sm:text-4xl text-3xl font-semibold pt-8 md:pt-24 mb-2 text-orange-600 ">
            Mission
          </h1>
          <p className="md:text-xl text-sm leading-6 md:leading-8 md:mt-12 mt-4 ">
            The mission of CVDS is to create pathways for the progressive
            removal of societal bias and the negative stereotypes that exist
            today.
          </p>
          <div className="tmd:text-xl text-sm  text-justify mt-10 flex items-start flex-col justify-start gap-4">
            <p className="flex items-start gap-2 justify-start ">
              <IoIosCheckmarkCircleOutline className="text-orange-600 mt-1 lg:mt-2 xl:text-xl text-6xl sm:text-6xl h-1/4 md:text-4xl  justify-self-start" />
              To overshadow the prejudice prevalent in Nepal regarding the image
              of psychiatrist disabled people and hence provide equal
              opportunities for them till they live.
            </p>
            <p className="flex items-start gap-2">
              <IoIosCheckmarkCircleOutline className="text-orange-600 mt-1 lg:mt-2 xl:text-xl text-6xl sm:text-6xl h-1/4 md:text-4xl  justify-self-start" />
              To motivate and involve disabled and conflict victims in various
              activities by giving them knowledge about dancing, music,
              toileting, art, and formal education.
            </p>
            <p className="flex items-start justify-around gap-2 ">
              <IoIosCheckmarkCircleOutline className="text-orange-600 mt-1 lg:mt-2 xl:text-xl text-6xl sm:text-6xl h-1/4 md:text-4xl  justify-self-start" />
              For the benefit of the kids, programs relating to personality
              development of the target groups will be conducted by a medical
              practitioner, caregiver, therapist, teacher, and administrative
              personnel.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-0 lg:container mx-auto sm:my-20 my-6 font-extralight">
        <h1 className="sm:text-4xl text-2xl  font-bold pt-24 mb-4">About Chiarman:</h1>
        <div className="flex items-start gap-4 ">
        
          <p className="text-justify text-sm sm:text-xl font-extralight sm:leading-9 leading-6  first-letter:text-6xl first-letter:font-bold first-letter:text-white first-letter:bg-orange-600 first-letter:p-4 first-letter:font-serif first-letter:float-left first-letter:mr-3">
            I am Yub Raj Thapa born in 23rd march, 1973 in Hasanpur VDC, a remote
            place of Bhojpur district, Nepal. I am the second child among 6
            children (4 sons and 2 daughters) of my parents. I was not only an
            active and curious sibling but also very good in study. My schooling
            was started from SHREE JAN SEVA LOWER SECONDARY school which was
            located nearby my house. I often stood first in study in the
            classes. After I passed class 7 I had to go four hours far from my
            house on feet to pursue my further education since we did not have
            high school in our village. When I was admitted to Shree Sagarmatha
            SECONDARY
          </p>
        </div>
        <p className="text-justify text-sm sm:text-xl font-extralight sm:leading-9 leading-6 ">
          SCHOOL that time I was only fourteen year old. It was only me going
          that school from my area which used to lead me going alone finding
          school friends from only the middle of the path. I used feel often
          fear going through the jungle and hill where there were many dangerous
          animal like tigers and beers. due to fear I used to carry a stick with
          me from my home thinking I could be safe and secured with it. I would
          not even get money to have my lunch and snacks going to the school.
          Struggling through hunger, tiredness and thrust coming back home from
          the school was my normal phenomena. ALTHOUGH my family had enough
          resource providing a pocket money, I never got money to have my food
          caused starving time and again. However, I continued my study and
          passed grade 8. <br /> While I was studying in grade 9, unfortunately
          I developed pain in my backbone. The paining situation went worsen
          than the worse day by day. I ended up going to school. In remote
          place, WHERE traditional belief and superstition were highly rooted in
          the villages in those days. As advices received from our neighbors and
          friends my family took me to traditional healers for my treatment.
          They began to take me to them daily-sometimes, one after other
          persons. Innumerable chickens, Pigeons including vegetables WERE
          SACRIFICED BUT IT DIDN’T help changing anything in my condition. The
          more I was taken to traditional healers more my condition got worsen.{" "}
          <br />
          The reason that I was not taken in to hospital for treatment was
          strong belief that hospital could not treat such type of disease, cost
          and distance associated with it. Until then the disease attacked acted
          more severely. The part of my body over my knees and below my waist
          started paining. The process to take me to traditional healer didn’t
          stop so I began to take a stick for walking. After some days my right
          leg also stuck moving. Then I was in a condition not able to move from
          a place. When I became paralyzed from moving just sitting in a
          particular place then only I was carried by a potter up to the place
          where bus service were connected . My father took me to a private
          health clinic in Biratnagar, Morang district for treatment. Later IT
          CAME IN MY KNOWLEDGE that the health clinic was the aryurbhadhik
          clinic. The doctor gave us some ayurbeddhik medicine saying the
          medicine would work well. I would have recovered by ninth month by
          taking the medicine as prescribed. So we came back to home with this
          medicine and the advice given by the doctor. I returned home carried
          on a basket by a potter. With the hope of recovery and the relief from
          the disease, I used to take medicine routinely but the effort went in
          vain as I couldn’t fell any improvement in my bodily condition. Again
          I put a proposal fourth requesting my family member to take me to
          another hospital but the proposal was not heard at all .This situation
          invited conflict and quarrels everyday between my father and me. I was
          almost tired with my situation and behavior showed by my father.
          Finally I decided to suicide myself taking poison. It was the month of
          July, my father and mother had gone to terai (plain region) to tilde
          the field and plant the rice. One day, I was with my six years sister
          who didn’t know what poison was and it worked for. Getting advantage
          of her innocence I asked her to purchases four pockets of rat killing
          poison from nearby shop. The poison was stirred in a glass with water
          and kept it under my pong. I wrote in a paper the agony and givens to
          wards my family and reason of my decision of suicide and kept it under
          the pillow. I HAD WRITTEN IN THAT paper that I wanted proper treatment
          and recover in addition to continue my study and do good thing for the
          society and my family itself. But my dreams couldn’t be fulfilled. My
          condition happened to be worsening day by day .therefore I thought
          leaving my family, friends, relatives and leaving the whole world
          would be the best freedom for my soul and body. Indeed I had a
          intimate friend in my neighborhood with whom I often shared my
          feelings and emotion. He was out of the village at the moment. I
          wanted to say my last words to him before swallowing off the poison
          after a couple of days upon his arrival in the village. However, in
          main time there was a lot of impulse occurring in my mind. In other
          words, my mind was out of order-I could not sense out well time and
          again what I spoke out. During this situation, this very secret
          development was spoken with one of my brothers. One of the neighbors
          has been informed about the development of mine. He came to me. We had
          begun the dialogue. During our conversation I said I was hanging at
          branch of banyan tree. The root of the tree was cut by the mouse. The
          tree would fall soon. There was a den under the tree. Inside the den
          there was anaconda sitting looking at me with opened mouth to eat me
          away. I would fall soon and would be eaten by the anaconda. Neighbor
          said if I fell in the mouth of the anaconda you would be eaten and
          would be nice. But if you were fallen other side not at the mouth of
          the anaconda, then situation would further worsen. Means I would not
          die through the poison. Then, I realized it might not be the good
          decision. So I relinquished the idea of the being dead poisoning
          myself. I replied him positively saying I would not take poison. With
          this development I was not interested to speak to him further. He
          kindly advised to throw the poison away and burn the note I had
          written which done accordingly. The plot ended leaving only one more
          alternative to venture to Kathmandu for treatment and continue the
          study. But I didn’t know anything about Kathmandu. To know about it I
          sent a letter to radio Nepal, only a nationwide radio station
          functioning in those days, asking a question in one relevant radio
          broadcasting program. My letter was read in the 19th day I had sent
          it. When I heard my name with my detail address I was so surprised and
          thrilled. although I had the radio set quite functioning with me I did
          not listen my question answer myself directly. When one of the
          neighbors told me that my question was answered then only I came to
          know it. They told me that I was suggested to contact Kathmandu Social
          Welfare Council which would help me. I thought I should go to
          Kathmandu then but neither did I have money nor I would get help from
          the family. But I thought to try once asking my father thinking he
          might agree fulfilling this desire. Hoping I might be able to go to
          Kathmandu I told him, if he would take me to Kathmandu I would
          continue my studies apart from improving the physical condition. But
          he said to me (other son who are fine and have leg didn’t study how
          will u having no leg study). He also said that to invest money for my
          studies is like throwing the money in the river. Now I brainstormed
          what to do. How would I go to Kathmandu achieving my final
          destination? Thinking like it I bought a chicken and it started
          growing being bigger day by day and begun laying an eggs and hatching
          it producing chicken. The process kept on continuously being a good
          source of earning money by selling them. Apart from chicken I even
          learnt to play cards inviting people in my house frequently and I
          didn’t feel alone, too. Playing card was for entertainment as well as
          gambling. This turned like a good business in my case thereby winning
          the card earning a 10 to 15 rupee daily. The friends who used to play
          with me used to say in half way joking manner that "we feel jealous to
          give you money directly so we are giving you through playing cards."At
          that time I was able to meet Mr. Balkrishna rai, then leader of Nepal
          who was from my district. He had come to my house in a connection of
          his political campaign. I talked with him about my problem and longing
          to go to Kathmandu. He promises to take me to Kathmandu with him .as
          he promised finding a good luck day we thought to go to Kathmandu. We
          searched for a potter. That time my father had gone to terai to
          harvest the paddy. So we send a message to him writing "your son is
          going to Kathmandu and if you love him then come home. When my father
          heard the message this time he immediately came home and we both
          together went to Kathmandu. When we reached Kathmandu then firstly we
          went to Bir hospital, one of the oldest government hospitals, where
          the doctor examined me and told my father to do CT scan which I did
          not understand properly. But I was told by saying that my disease
          couldn’t be cure then. Then I went to Khagendra New Life Center, the
          first residential rehabilitation center for the persons with
          disability in Nepal located at jorpati, Kathmandu. But there was no
          place for my accommodation. At the same time I heard that there was a
          health camp being organized in Nepalgunj (Mid West Nepal) providing
          free assistive devices for the needy disable people. So I requested my
          father to capture that opportunity I wanted wheelchair easing my
          mobility. My father responded conversely saying to go to Kathmandu
          solving your problem. When we came here you are saying to go to
          Nepalgunj and when you will go there you may say to go to India. You
          may finish the little property that I have. We also need to live and
          your brother, sisters also need to live.) With this statement he
          returned back to Sunsari District, eastern, Terai where he had owned
          some land several years before leaving me alone in Kathmandu. <br />{" "}
          BAL Krishna Thapa, then Leader played my hotel cost and purchased a
          bus ticket and send me to sun sari district. When I reached there
          again I requested my father to take me to Nepalgunj. Then he agreed to
          take the ticket to by bus tickets to Nepalgunj. When he went out of
          the house, the neighbors' told him "your son will waste all your
          money, if you follow his demands" so he returned back. When he
          returned home then I scold him and a quarrel began. I scolded the
          neighbors saying" if u can help then help me if u can't then don’t
          stop others". After then my father again went to take the ticket and
          we went to Nepalgunj finally. <br /> I collected one wheelchair from
          the health camp. We came back Sunsari with that wheelchair for me.
          With help of the wheelchair I improved my mobility there. I admitted a
          local school and continued my schooling smoothly. When my School
          Leaving Certificate (slc) examination was over, I was alone; my father
          had gone to village during those days. so taking advantage of this
          time I sold 2 quintals of rice and went to Kathmandu with my younger
          brother, prem Thapa lying that we would be going to visit Kathmandu.
          In 3 days journey we reached Kathmandu. After reaching here, WE
          visited to one of the organizations working for the rehabilitation of
          the persons with disability where medical treatment facility to was
          available. TO examine myself quickly I requested the phisio therapist,
          krisha Gurung. But he refused admitting me saying that I would wait
          more 3 months for my turn. Then I stayed outside with sadness cursing
          my fate. In the main time, <br /> I had seen the visitors coming there
          would greet the staff by saying (Namaste) and how are you and so on.
          In return, the welcoming behavior from staff would be showed. But I
          had just come from village, became shy, didn’t know to say namaste and
          so forth. Might be it was the reason why the staff didn't come in
          front of me and didn’t talked with me. so I thought I must be
          proactive-saying Namaste, how are you ETC. <br /> then I told Namaste
          to one of the foreign volunteers, then she also Replied it and came
          near to me, sat near me and asked me what was my problem. Then I
          turned out my story and told that I did not get admission in the
          hospital. Then immediately she went inside and brought the phios
          therapy out and requested him to take my admission then krisha Gurung
          accepted her request and admitted me for 6 months. I thanked her so
          much. Then my phisio therapy begun and within 3 month I was able to
          move a little. They were also happy and slowly were improving. The
          result of slc exam came out. I knew that I was fail in English
          subject. With this result, I did not lose my hope and efforts. So I
          reappeared the exam too next year and passed SLC, an iron gate for a
          carrier development here in Nepal. While I completed course of phisio
          therapy, I engaged to paid work in the same organization to earn
          little money. I admitted a college nearby to continue my education.
          But seeing me a disable the public vehicle would not stop while going
          to college, I use to fall a lot when getting into the vehicle.
          Fighting this situation I was able to continue college level study for
          3 years. Then after due to my technical problem I was compelled to
          discontinue the study. Then we few friends sat together discuss to
          establish an organization to be run by ourselves. We were able to
          establish an organization named conflict victim and disable society.
          This organization has been registered with the local government of
          Nepal under NGO registration Act. Soon also affiliated with social
          welfare council's started working as the founder president .in the
          same year I had an intercaste marriage to very generous lady. A year
          after we were lucky to have a baby boy. Now he is studying in class 9.
          ( but corana is distrub now.. he is in home. We realized there are
          children and adult with intellectual disability and multiple
          disability severely deprived from opportunity living in a very
          pathetic condition everywhere across the country. Where will there is
          is a way. We began this work. Now we have been providing orphans left
          in the street, kept in house without providing basic facilities and
          other orphans. We have run a residential rehabilitation facility. A
          team of 9 staff and staffs have dedicated to support this 50 children
          till date providing necessary care and support - rendering phisio
          therapy service, regular health check up from doctor ,special
          education classes ETC. I would like to end my autobiography here
          appealing all of you for your generous support to lifting thousand of
          the persons with disability and people living in extreme poverty,
          hunger, illiteracy, capacity building training and health treatment in
          our communities. Being a social worker myself With a strong
          determination and conviction, through my organization I would like to
          concentrate and focus promoting the livelihood of 1000 persons with
          disability and marginalized people in life time period .Certainly we
          are nothing without begging your hands and heart with us. <br />
          <br /> Thank You. <br />
          Yub Raj Thapa <br />
          <br /> President Conflict Victim and Disable Society-Nepal <br />{" "}
          Shankharapur Municipality- 6,Shalambutar, Shakhu, Kathmandu, Nepal{" "}
          <br /> Tel:9851160868/9841360868 <br /> Email: cvdsnepal@yahoo.com{" "}
          <br /> Facebook: cvdsnepal/yubraj thapa bairagi
        </p>
      </div>
      <More />
    </div>
  );
};

export default Aboutus;
