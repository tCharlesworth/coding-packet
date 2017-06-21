import React, { Component } from 'react';

import { Section, 
         PageHeader, 
         Carousel, 
         SubHeading, 
         SideVideo } from './common';

class ArticleComponent extends Component {
  render() {
    return (
      <div>
        <PageHeader title="Title of the section" subtitle="Subtitle" />
        <Section>
          <Carousel
            images={[
              {src: "./images/photo01.jpg", title: 'Raging River', caption: "Any fish in here?", alt: "image 1"},
              {src: "./images/photo02.jpg", title: 'Peaceful Water', caption: "Great vacation spot", alt: "image 2"},
              {src: "./images/photo03.jpg", title: 'A Snowy Place', caption: "This looks cold", alt: "image 3"}]} />
        </Section>
        <Section>
          <br/><br/>
          <p style={styles.articleTextStyles}>Spicy jalapeno bacon ipsum dolor amet beef filet mignon pork tongue turkey ground round. Sausage porchetta cow, bresaola kielbasa pastrami biltong. Flank sausage ham, bresaola boudin shoulder turducken andouille. Pork belly drumstick andouille corned beef, t-bone pastrami shankle. Brisket porchetta cupim, filet mignon bresaola short loin jowl pig kielbasa meatball leberkas ham pork loin t-bone.</p>

          <SideVideo 
            video={{ 
              poster: './images/photo04_poster.jpg', 
              title: 'Earthly Father, Heavenly Father', 
              caption: 'Video Caption', 
              src: 'http://ldsudso-a.akamaihd.net/66852713001/66852713001_3101752827001_2013-01-002-earthly-father-heavenly-father-8000k-eng.mp4?playerId=710849472001&lineupId=&affiliateId=&pubId=710874264001&videoId=2125099902001'}} />

          <p style={styles.articleTextStyles}>Alcatra brisket pork chop meatloaf swine beef tri-tip kielbasa landjaeger burgdoggen chicken biltong sirloin. Bresaola burgdoggen tri-tip swine ham. Filet mignon landjaeger leberkas capicola. Kevin andouille short ribs, salami tri-tip tail ball tip kielbasa flank cow ribeye. Landjaeger cow cupim, biltong short ribs beef ribs pork loin prosciutto short loin capicola hamburger porchetta pig. Shoulder pork belly filet mignon kielbasa ham hock meatball pancetta rump tenderloin pork loin spare ribs jowl. Jowl corned beef burgdoggen pig chicken fatback cow doner pork short loin turducken.</p>
          <p style={styles.articleTextStyles}>Strip steak meatball tri-tip kielbasa meatloaf swine leberkas shankle biltong ground round ham hock t-bone pancetta short loin. Tenderloin cupim doner t-bone sirloin jowl pastrami hamburger shank kielbasa ham bresaola tri-tip porchetta beef ribs. Venison shankle meatloaf, salami swine doner pork pancetta leberkas strip steak short ribs chuck pork loin beef ribs prosciutto. Ham chicken landjaeger turkey shankle meatloaf andouille flank pork.</p>

          <SubHeading>Sub-heading</SubHeading>
          <p style={styles.articleTextStyles}>Spicy jalapeno bacon ipsum dolor amet jerky t-bone meatloaf spare ribs pork shank swine. Flank landjaeger pastrami strip steak salami jowl. Pig short loin boudin tenderloin shank shoulder, pork picanha tri-tip alcatra venison cow. Kielbasa chuck jerky shoulder shank. Short loin shankle biltong turducken, kevin hamburger beef ribs boudin. Ham tenderloin leberkas, cupim landjaeger bacon cow. Sausage pork beef, pork chop landjaeger prosciutto jerky cupim.</p>
          <p style={styles.articleTextStyles}>Ball tip flank shankle salami drumstick swine short loin turducken. Ball tip salami prosciutto beef, kielbasa strip steak bacon burgdoggen tri-tip alcatra. Pork chop corned beef ham turkey, ground round ham hock swine chuck. Strip steak cupim turducken ribeye shankle capicola. Capicola kevin venison, short loin turkey fatback kielbasa. Short ribs pancetta filet mignon, chuck bacon pig ribeye meatloaf.</p>
          <p style={styles.articleTextStyles}>Beef ribs tongue leberkas brisket short loin. Pork prosciutto fatback pancetta ground round. Salami cow meatloaf strip steak swine pork loin. Frankfurter swine beef, ham hock short loin tongue filet mignon. Brisket tenderloin meatloaf, shoulder sausage picanha ham hock turducken bacon corned beef andouille tongue pancetta short ribs filet mignon. Jowl ham prosciutto chicken pork brisket tri-tip, beef ribs ham hock pastrami bresaola corned beef. Jerky chuck biltong sirloin brisket turkey tri-tip bacon ribeye pork kevin venison leberkas.</p>
          <p style={styles.articleTextStyles}>Bresaola brisket tri-tip, cupim cow shoulder pork loin pig sausage rump. Picanha shoulder jerky porchetta jowl doner meatball chuck leberkas tail ground round capicola sirloin hamburger. Flank chuck tongue, cow jowl hamburger biltong. Kevin hamburger cow, rump jerky short loin pig prosciutto pork loin sirloin brisket tri-tip. Pork rump brisket, drumstick ribeye venison pork chop corned beef kevin shank pork loin frankfurter strip steak shoulder. Sausage pork belly venison, fatback ham hock biltong short ribs alcatra ground round picanha sirloin. Ham hock ham bacon, ribeye ground round doner tail spare ribs shoulder shankle rump leberkas ball tip frankfurter.</p>
          <p style={styles.articleTextStyles}>Brisket chuck andouille, beef swine tri-tip filet mignon leberkas t-bone salami tail shankle. Chicken sirloin shankle pork chop ribeye burgdoggen pork loin alcatra turkey pastrami bacon. Shankle jerky ribeye, rump prosciutto shoulder biltong frankfurter tenderloin hamburger doner pork loin ball tip sirloin ham. Tongue alcatra bacon flank tenderloin cupim beef ribs porchetta shankle. Bacon t-bone tri-tip meatball, short loin ball tip turducken sirloin beef ribs venison porchetta ground round turkey fatback. Ham hock tail chuck prosciutto doner bacon capicola pork chop pork sirloin beef ribs shank rump.</p>
        </Section>
      </div>
    );
  }
}

const styles = {
  articleSectionStyles: {
    marginTop: 30
  },
  articleTextStyles: {
    fontSize: '0.9em'
  }
};

export default ArticleComponent;