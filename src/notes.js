import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./images/babyway.png";
import Navbar from "./navbar";
import tag from "./images/tag.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

class Notes extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      centerPadding: "100px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="App">
        <Navbar />
        <div class="container slider">
          <Slider {...settings}>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Dear shayu di n vaibhav jij congratulations to you both may ur
                  child be as beautiful as shayu di n as bright as vaibhav jij
                </p>
                <h4>Tejal Mehta</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Wishing you all the best with the new baby who is not far away
                  now. Wish you endless love and boundless patience for making
                  your new role as super parents a grand success!
                  Congratulations to the soon to be Aai and Baba!!🙂
                </p>
                <h4>Tejas Thote</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  माझी मनु आई होणार..खुप खुप आनंद झालाय.तुमचे बाळ निरोगी ,
                  बुद्धिमान,सुंदर,हसरे,खेळकर होवो. अभिनंदन..शायरी ..वैभव
                </p>
                <h4>Meena Shah</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Dear Shayari & Vaibhav
                  <br /> 9 Months of pain, but a lifetime of gain. <br />9
                  Months of sickness, but a lifetime of happiness. <br />9
                  Months of pregnancy, the beginning of your legacy ....
                </p>
                <h4>Shraddha Kaki</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Dear Shayari & Vaibhav
                  <br /> Pregnancy is like a box of chocolates. You never know
                  what you're going to get.
                  <br /> Congratulations on creating one sweet treat!
                </p>
                <h4>Mayya Kaka</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Dear shayari and Vaibhav,
                  <br />
                  Congratulations for a great milestone in ur life. I wish and
                  confident that ur baby will be talent (as vaibhav) ,smart (as
                  shayari), calm and quiet ( like Raj ji) and ever smiling (
                  like Renuji)
                </p>
                <h4>Vivek Shah</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Acknowledge how lucky, as parents, you are. Smile, as you gaze
                  into your newborn’s eyes. Soak in the joy of having a baby and
                  appreciate your life’s biggest prize. Wishing you two (almost
                  three) all the best and a hasselfree delivery!!! Load of love
                  and good wishes❤️🎉🎊
                </p>
                <h4>Ankita and Dhaval</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Hi Shayu,
                  <br />I can express how happy I am for you and Vaibhav. You
                  both are going to be amazing parents. Excited to meet the
                  little angel 😍
                </p>
                <h4>Payal Bhosale</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Dear Shayari,
                  <br />
                  Congratulations on becoming a charter member of the Mom's
                  club! Your title may change, but your life will just continue
                  growing better & brighter. Enjoy this period of pregnancy as
                  it the only time in life when u fall in love with someone u
                  haven't met. Get ready to not sleep for a while- but it will
                  totally be worth it I am sure you are going to be an amazing
                  mother and guide/friend through your child’s life. Finally
                  ...Best wishes for having a healthy baby and a safe delivery.
                </p>
                <h4>
                  Trupti and Sagar
                  <br />
                  Eagerly awaited 'To be' didi - Urvi
                </h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  बेसब्री से कर रहे जिस पल का इंतेज़ार, वह पल ले आया हे ख़ुशियों
                  का उपहार सभी कर रहे हे उस महमान का इंतेज़ार लायेगा संग जो
                  ख़ुशियों की बौछार
                  <br />
                  Sending happy thoughts your way as you prepare to welcome a
                  little someone new to your family. This little miracle will
                  soon make your world more beautiful and more joyful.
                </p>
                <h4>Anjali and Alka Agarwal</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Hi Shayu,
                  <br />
                  Get ready for a roller coaster ride with your pregnancy. One
                  of the best moms in the world, you are bound to be. You must
                  be feeling magical from within That's because one of life's
                  best stages you are in! Congratulations to you Vaibhav!! Lots
                  of love!!
                </p>
                <h4>Komal Kulkarni</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  We are proud of Monu and Shayari for giving so joyful moments.
                  The feeling of Dada and Dadi is greater than Mom and Dad. Our
                  blessing with them. I wish becoming cute child filled their
                  life with happiness. Many Many congrats for starting a new and
                  lovely life.
                </p>
                <h4>Dadu and Dadi</h4>
              </div>
            </div>

            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Dear Shayari and Monu A bundle of joy is coming soon. God
                  bless you with lots of happiness. Many blessings 😊😊 Love you
                  😍
                </p>
                <h4>Urmila khandaka</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  प्रिय शायरी, अनेक आशीर्वाद. शब्द विकास महांचे आहेत. शब्दांकन
                  भारती शहा यांनी केले आहे. नऊ महिन्यांमधे सगळ्यांना गर गर फिरव.
                  सगळे लाड़ करुन घे. स्वताची काळजी घे. आणि आम्हाला मस्तपैकि
                  गोंड़स नातू दे. अर्थात काही ही मुलगा मुलगी फरक माझ्याकड़े
                  नाहीं. स्वस्थ्य, सुंदर, गोंडस बाळ घरात येवो हीच सदिच्छा.
                </p>
                <h4>Vikas Maha</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Pregnancy is a miracle, and its the best gift a couple can
                  get. A lifetime of sweet memories. Fighting through all the
                  pain and mood swings, just wait for the moment when your baby
                  is finally here. Its a feeling you can't express in words. A
                  brand new chapter of life marking the start of parenthood.
                  Enjoy each day to the fullest. Its gonna be full of surprises.
                  <br />
                  Congratulations to the blessed couple...!!!
                  <br />
                  Loads of Love !!!
                </p>
                <h4>Abhaykumar Shah and family</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  In PINK or BLUE,
                  <br />A Dream Come True!
                </p>
                <h4>Smita Kulkarni</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Dear Shayari,
                  <br />
                  You are entering a life phase where you will experience varied
                  emotions. Most of them are beautiful but some can make you
                  feel a bit strange. You will experience a bond which is
                  present only between you and your child, which is filled with
                  unconditional love, prayers and nothing but wishing happiness
                  for your baby. But there will be days of frustration and
                  doubts and then lots of guilt about feeling this way. I guess
                  this is what motherhood is. It cannot be dfined but only be
                  experienced and felt. I wish you lots of happiness and good
                  wishes, but also lots of strength and power. It is going to be
                  a wonderful journey but also a challenging one, but remember,
                  it'll al be worth it in the end.
                </p>
                <h4>Anupriya</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Dear Shayari and Vaibhav,
                  <br />
                  Congratulations to you both many happy wishes to you for the
                  future. You guys will be wonderful parents and we wish you
                  both good luck and lots of stamina for endless and sleepless
                  nights.
                </p>
                <h4>Anupriya, Mihir, Indraneil and Nissa</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  शायरी आणि वैभव, <br />
                  लग्न हे प्रत्येकाच्या आयुष्यातील एक महत्त्वाचा टप्पा असतो. यात
                  फक्त नवरा बायको ह्यांचे नाहीतर दोन अनोळखी कुटुंबाचे मीलन असते.
                  तुम्ही दोघांनी हा टप्पा छान पार करून आता तुमच्या एकत्रित
                  वाटचालीतील दुसऱ्या खूप छान पण तेवढ्याच महत्वाच्या टप्प्यावर
                  पोहोचला आहात. आतापर्यंत तुम्ही तुमच्या आई वडिलांची लाडकी मुलगी
                  आणि मुलगा होता, आता तुम्ही आई बाबा होणार आहात. येणारे बाळ खूप
                  आनंद वाढवणार आहेच पण त्या बरोबरच जबाबदारी सुध्दा. ह्या दोन्ही
                  गोष्टी आता आयुष्यभर बरोबर राहणार आहेत. या प्रवासात तुमच्या
                  पहिल्यांदी लक्षात येत जाईल की तुमच्या आई बाबांनी कसे तुम्हाला
                  ह्या सगळ्याच्या लायक घडवले. येणारे बाळ सर्वांच्या जीवनात नवीन
                  नाती निर्माण करणार आहे. आजी आजोबा, काका काकू, मावशी, आत्या
                  इत्यादी इत्यादी!! हे बाळ खूप नशीबवान आहे आणि राहील. या प्रसंगी
                  तुम्हा दोघांना आणि त्याला खूप खूप आशीर्वाद आणि परत तुमचे
                  अभिनंदन!!
                </p>
                <h4>Shrikant Kulkarni</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Dear Shayari and Monu <br />A bundle of joy is coming soon.
                  God bless you with lots of happiness. Many blessings 😊😊 Love
                  you 😍
                </p>
                <h4>Urmila Bua</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  All the best Shayari and Vaibhav. This new phase is going to
                  be really exciting and exhausting!!! Shayari please make
                  Vaibhav change every diaper from the start (set the
                  expectations from day 1 haha). And he should wake up when the
                  baby wakes up at night! After all, you need moral support for
                  all the sleepless nights (shh.. don’t tell vaibhav i am asking
                  you to do all this!!) Jokes apart, I am sure you both are
                  going to make great parents. May the delivery be painless and
                  the baby is healthy and has Vaibhav’s brains from day 1! No
                  pressure you see 🤓🤣
                </p>
                <h4>Priyanka Anand</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Shayari - work from home for me for next few months
                  <br />
                  Vaibhav- Same here 🙌 .....after some days...
                  <br /> Shayari- Monu I’m pregnant 😍 💥🎊🧏‍♀️👨‍❤️‍💋‍👨
                  <br /> Vaibhav- 🤭wow that's such an awesome news ..😍😘🤩 You
                  know baby.. we are celebrities now...🥳👨‍👩‍👦
                  <br />
                  Shayari - wow! How? 😎💃🕺💃
                  <br /> Vaibhav- lockdown celebrities🤷! See👇🤩
                  <br /> LOCKDOWN KA SAHI UPYOG KOI HUMSE SIKHE🥳🤩🤭😎🤓🧐🤗🥶
                </p>
                <h4>Nilesh Kaka</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Meanwhile in Pune...
                  <br />
                  Meena- Aho mala tension alay😳😵
                  <br />
                  Vivek- Tension mi ghet asto! Tula Kay zhalay..
                  <br />
                  Meena - Nupur Ani Aniket pan ' work from home'...🤫 🤭😷
                  <br />
                  Doghe Shayu Ani Nupya e😊ekach veli...!!!!????🤔🤭🙀🙀
                  <br />
                  Vivek- Aga Meena..Apan Gele 15 varsha doghe 'work from home'
                  ach ahot...kahi problem zhaala ka???🧐🤗💥🎊🤩 🕺🕺 <br />
                  Meena- mala Nutan Bhabhi la phone Karu dya, mala ' dinkacha
                  ladu chi garaj ahe'💪💪💆💆🙆‍♀️ <br />
                  Vivek - mein ithe ekta asnaar ahe..meich phone karto Bhabhi
                  la..Saglyat jaaast dinkacha ladu chi mala garaj ahe 💪😌🥺✌️👨‍🎓
                  🙄😹 <br />
                  Meena- Are baap re... 🤗🤭🤭🥱🥱🙀
                </p>
                <h4>Nilesh Kaka</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Back to Dilli....
                  <br />
                  Month2
                  <br />
                  Shayari : Vaibhav Mai moti lag Rahi hoon???🧐🤭🤫🧐🤭🥱
                  <br />
                  Vaibhav: 🤐🤐not at all Baby..you are as beautiful as
                  ever🤫🤫🤩 ☺️☺️😌🤭🤩🤗
                  <br />
                  Shayari: 💃💃💃😍😘😍😘Chalo aaj main Dinner banati
                  hoon👍😊.....Ram🗣🗣🗣🗣
                  <br />
                  Month 4<br />
                  Shayari: Monu main thodi moti lag Rahi hoon na?? Mere gaal
                  dekho 👩‍🦳👧👧😴
                  <br />
                  Vaibhav: 👨‍🎤🥱😥🥺 ammmm.nahi dude kaha?? You are as beautiful
                  as ever... Bus thoda pet hi 🤫🧐🧐but that's natural na
                  baby..don't worry 🥺😵🤫🥱🧐🤩🦸‍♂️🤷🤷‍♂️🙍‍♂️
                  <br />
                </p>
                <h4>Nilesh Kaka</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  Month 5 day 1, 7,15, 11,21.......
                  <br />
                  Shayari: Janu! main moti.....👧👧
                  <br />
                  Vaibhav: 🥱🥱no baby..kaha??you are as
                  beautiful....🤷🤭🥱😤🤯🤫😷
                  <br />
                  Day 6, 18, 28...
                  <br />
                  Month7 day 1<br />
                  Shayari: Monu mujhe dekho..main ab moti lag Rahi hoon
                  na???👧😵👩‍🦰👩‍🦳👰🦹‍♀️🦹‍♀️🤰🙆‍♀️🧏‍♀️🤗
                  <br />
                  Vaibhav: Aa...ammmm..ab 🤷🤷😵😵thoda sa 🗣😙 lag Rahi
                  ho...😷😷buss thoda..
                  <br />
                  Shayari: 🦹‍♀️🤯🤬🤯🥵😡👹🙀🙀👹✊🤛🤜Vaibhav!!! Main ghar mein
                  baith ke tang aagayi hoon...I need a brreeaak🤯🦹‍♀️🥶🤧🤧
                  🙀🙀🤯👿😵🤧😥mujhe Kahi le chalo.. I need I need I need a
                  break!!!!👹
                  <br />
                  Vaibhav: O teri... Itna reaction... 😥😥😥Darling..mein to
                  mazak karr raha Tha 🙀🙀🤫😷..tum moti nahi lag Rahi....you
                  are as Bea..🤯🤩😵🤧🤣uti🌸🌸...🤷🤷😷😷🤐🤐🤭
                  <br />
                  ...... Now let's Aak Vaibhav...Kya Shayari Moti Lagg Rahi
                  hain???!!!!!😅👌👍🤷🤷🤷😅😅🤣🤣
                  <br />
                </p>
                <h4>Nilesh Kaka</h4>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src={tag} class="img-circle img-responsive" />
                <p>
                  शायरी वैभवच्या जुळल्या रेशीमगाठी, निसर्ग़ सज्ज झाला बाळाच्या
                  स्वागतसाठी
                  <br /> हिरवळीला शालू नेसून सजली ही अवनी, सासू सासर्यांचा आनंद
                  मावेना गगनी
                  <br /> डोहाळे पुरवण्या पकवानांनी भरले ताट, आशीर्वादांच्या
                  पायघड्यांनी सजली पाऊल वाट <br />
                  शुभेच्छांना संगे घेऊन - आप्तेष्ट आणि मैत्रीणी, आले सगेसोयरे
                  आणि सार्या भगिवी
                  <br /> हौस मौज़ करत गातात स्वागताची गाणी, सुखावली नख-शिखांत
                  आमची ही फुलाराणी
                  <br />
                  कुजबुजला चंद्रमा चांदण्यांच्या कानी, कोण असेल गं? या स्वागताचा
                  धनी
                  <br /> असेल का चक्रपाणी? की असेल आमची राधाराणी, कोण असेल?
                  माताही चिंतिते मनी
                  <br /> प्रार्थिते ती जननी - म्हणते असो कुणीही पण, असु दे
                  आरोग्य संपन्न - सुदृढ़ नि सदगुणी <br />
                  उजळो वंशाचा दिवा - वाढ़ो किर्ती त्रिभुवनी, चिमुक्ल्या पवालांनी
                  - सुख नांदू दे अंगणी
                  <br /> हेच मागणे परमेश्वरा - नत मस्तक तव चरणी
                </p>
                <h4>Nita Kaki</h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Notes;
