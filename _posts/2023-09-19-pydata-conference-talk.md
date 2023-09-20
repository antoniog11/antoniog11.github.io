---
title: PyData Language Creator Charity Speech 
tags:
- "conferences"
- "programming"
tagline: Trancript for the speech I gave to open the PyData Language Creator Charity Panel in Seattle
date: 2023-09-19 15:30 -0500
author_profile: false
---

*This is the transcript for a speech I gave for the PyData Language Creator Charity Speech on September 19, 2023. At the meeting were the creators of various programming languages like java, typescript and python. I gave this speech conference to open the panel discussion.*

Thank you for the introduction. Hello everyone, I want to thank the hosts and the conference organizers for allowing me say a few words to open this panel. 

Its a great privilege to be here to give some opening remarks before such a phenomenal panel of computer scientists and engineers. 

I'd like to tell you all about my personal experience learning about programming and my path to computer science and engineering as well as the observations I've had throughout that journey. And I'll end with some of my thoughts on the future of software technologies and technology in general. 

Ever since I was young, I have enjoyed taking things apart. I always got a kick out of seeing how things worked and there is no better way of doing that than pulling out a screw driver and hammer and breaking things open and looking at the insides. Whether it be an old speaker, a television, or the remote controller for a little RC helicopter, seeing what gave life to so many of the gadgets and old electronics around me was always exciting, even if I didn't fully understand the details of how they worked. But what mattered more than knowing the details of how this technology worked, was the curiosity that this endeavor nurtured in me, and likely in some of you as well.

Cutting wires, breaking things open, shorting a few circuits here and there and causing smoke to spew out: all of this was how I went about understanding how the technology I used in my daily life worked. 

It turns out that electronics weren't the only thing I had an interest in understanding from the inside out. Human physiology and medicine always fascinated me as well so I decided to study Biomedical Engineering in college. But what was equally exciting in this field was learning about the inner workings of medical technology. Whether that be the imaging technology that lets us peer inside of ourselves with such captivating clarity and detail, or the anesthesia machines, the ventilators and vaporizers that generate the cocktails that carry us to sleep for surgery. Or the instruments used to diagnosis and treat human disease and ailments. 

All of this technology that I had seen on television or seen in use with my own eyes is what drew me to study biomedical engineering and the field of medical sensing devices broadly.

Now because I was in the school of engineering, I also had to take an intro programming course during my freshman year of college. I was taught a wonderful little programming language by the name of Matlab and I actually have fond memories of my early experience learning Matlab. For beginners it definitely makes learning programming quite painless. The installation was as easy as downloading any other app on my computer, there was immediate feedback at the interactive command prompt, and I could see and inspect all of the variables I was working with.

There were naturally some hiccups when using a proprietary toolkit such as Matlab like when your license key expires the night before a big programming assignment is due, as has happened to me before, but besides that I quite enjoyed using Matlab. And because I was still a neophyte in the realm of programming and software development, I thought highly of the entire Matlab ecosystem and the fact that I could now call myself somewhat of a "Programmer". 

But in my experience, the hardest part about learning Matlab, at least in the beginning, is when you are inevitably met with ridicule from other computer science students when you tell them that you use Matlab. I'll never forget going to my first Hackathon in undergrad, opening up my laptop and booting up Matlab to work on something and someone coming up behind me and whispering "Are you using Matlab?".

But nonetheless, Matlab got me through my biomedical courses. And because I never had a traditional computer science education, I never questioned much of Matlab's design choices or the premise behind Matlab as a a tool in general. I just took its suite of tools, expensive license, and inability to easily change the IDE to dark mode for granted. 

While Matlab definitely has its use cases in engineering, eventually I developed a love hate relationship with it and came to find that it was a stifling tool to use for many other types of programming tasks I wanted to do. I slowly started realizing some of Matlab's shortcomings when I began using Python. 

I remember my first exposure to Python quite vividly. It was with the book Python Crash Course by Eric Matthes from No Starch Press. I came across this book during the end of my Junior year in college when I was taking a break from studying for finals in the University bookstore. I had hear this word Python thrown around by some of my CS friends and knew that it was a programming language. And since I was started to get frustrated by some of the workflows in Matlab I figured I would learn this other language that I kept hearing about. So I coughed up $40 bucks and started learning Python with this book. 

I think it is fair to say in retrospect that this book and learning Python was really a turning point for me in my interest and relationship with programing languages. Not only was python an amazing beginner friendly language, but it also has a beautiful aesthetic and powerful versatility. I could be using numpy and scipy to compute fourier transforms one minute and the next fire up a web server and work on my personal website in flask. Or use circuit python to teach high schoolers how to program microcontrollers. 

And what makes it and so many other open source languages like it great is precisely that. The fact that these languages are open source. That you can peek inside and examine all the details to understand what is actually happening when you run a program. This feature of not only open source languages but open source projects as a whole is what gives them much of their appeal. The details are not hidden behind proprietary labels or blackboxes. The curious can open the lid and understand how everything works from the inside. As it was with the hardware of our youth, so too can we observe the inner workings of the software that powers so much of our digital world.This is an empowering act.  

And a natural consequence of making a language open source is that you will attract a community of users who want to build off of it. People who want to contribute to the maintenance of a tool for others to use, tinker with, to break open and explore. 

This idea of giving people access to the insides, giving people the keys so to speak, is what made the open source community so engaging for me in this journey I have taken to teach myself computer science and programming. And this level of accessibility and openness is what has skyrocketed many of these languages to dizzying heights of popularity. 

But one thing that also attracts me so strongly to the open source community is the participation that it fosters. To actively shape and maintain something with your fellow comrades with whom you share common goals. 

I want to talk now about some of the work that I have done so far during my PhD and its relevance to the open source community.

The most recent project I worked on which was published earlier this year was on developing a low cost hearing loss screening device. Early hearing loss screening is very important for making sure that newborns obtain access to health treatment and assistance for cognitive development. In the United States, virtually every newborn undergoes this procedure after childbirth. But unfortunately the device that performs this test costs thousands of dollars which makes it prohibitively expensive for low income regions. Despite its high cost, the mechanism of operation is quite simple. The test only involves playing tones into a person's ear through an earbud and analyzing the frequency content of the sounds that come back. 

To overcome the high cost of traditional devices like this, we built a wireless earbud that could reliably perform this hearing loss screening using commercial off the shelf components for less than $50 dollars. 

And as I was working in this space of medical sensing, I often read or heard words along the lines of "Democratizing healthcare" or "empowering patients" through ubiquitous technology. This type of language has also been extended to things broader than health sensing and medical care like expanding access to tools like chatGPT or large language models.

What does it mean to democratize health or democratize X?  It usually means something along the lines of making devices that monitor our health more widely available, or by making technology cheaper or easily distributable via downloadable apps. And lately I have especially heard this type of language used in the context of Language Models, for example giving patients access to their own personal health care provider or students access to their own personal tutor in the spirit of "democratizing education".  

But in my opinion, through many years of shadowing physicians and healthcare workers, from working in this space of health sensing, and by observing the current state of technology and the structure of ownership in the world today, none of these things really democratize technology or health in and of themselves. To be sure, making impactful technology cheaper without reducing quality is generally a good thing, as are reducing the barriers to technology access.

But to democratize something, which is a much harder thing to accomplish, means giving people the ability to participate. To participate in the decision making and in the conversations about how resources are distributed and what problems are being worked on. 

Strapping new smart watches on our bodies to track our health vitals around the clock or chatting with Large Language Models whose inner workings and training data are hidden from the users will do little to democratize health, education, or technology in my opinion. 

There is a good article by François Chollet, the creator of Keras, where he says that: 
>*Technology is never neutral. If your work has any impact on the world, then this impact has a moral direction.* 

Because technology is never neutral, we need to bring the people whom technology affects to the table in shaping how it is created, how it is distributed, and how it is used. Without any talk of allowing users to actively participate, talk of democratizing X or developing the next greatest technology to improve humanity is a nonstarter.  

And this is where the principles behind the open source community are particularly instructive. The success of the open source movement, itself a form of democratic participation, is remarkably instructive in teaching us how to structure our lives around the technology we use.

I can't offer you many strong opinions about the details of how a programming language ought to be designed from an engineering or computer science perspective. Nor can I pontificate on what the future of programming languages will be. But I know that if we are looking to technology to improve so much of our lives then allowing people to participate in the decision making must be the guiding principle. It is the only way to a sustainable future of technological growth. As it goes for open source, so it must go for everything else.

And I think it's fair to say that the work and creations of these incredibly talented developers here were driven by this mantra of openness, accessibility, and engagement with the goal of improving our lives through collaboration. They were likely not driven to create ground breaking technology with the hope of sealing it off and monetizing it. 

No matter what future language we use or whether AI and LLMs make programming obsolete or a visit to the doctors office unnecessary, active involvement by a large swath of users should be a fundamental principle behind any piece of transformative technology that can affect peoples lives. As the saying goes "Nothing about us Without us". 

Thank you. 

