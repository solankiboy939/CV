import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
// import { Award } from "lucide-react";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Download,
} from "lucide-react";
import LazyImage from "./LazyImage";
import { Links } from "@/data/links";

const AboutSection = () => {
  const resumeUrl = Links.resume;
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handledownload = () => {
    toast({
      title: "Downloading Resume",
      description: "Your download will start shortly.",
    });
  };

  return (
    <section id="about" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Bio
              </h3>
              <p className="text-muted-foreground">
              As a student pursuing a B.TECH CSE degree at Lovely Professional University, I am passionate about programming and developing innovative solutions for technical and IT challenges. I have gained multiple certifications in cloud fundamentals, Python, and C++ from LinkedIn and HackerRank, demonstrating my proficiency and interest in these domains. I am seeking internship opportunities that will allow me to apply my skills and knowledge in real-world scenarios, and to learn from experienced professionals in the industry. I have a strong background in problem-solving, time management, teamwork, communication, and leadership, which I have developed through my academic projects and extracurricular activities. I am eager to contribute to the success of a dynamic and creative organization, and to grow as a programmer and a learner.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />{" "}
                    Education
                  </h3>
                  <div className="space-y-0 mb-4">
                    <p className="font-medium">Lovely Professional University</p>
                    <p className="text-sm text-muted-foreground">2022 - Present</p>
                    <p className="text-sm text-muted-foreground">Computer Science and Engineering, CGPA - 6.9</p>
                  </div>
                  <div className="space-y-0 mb-4">
                    <p className="font-medium">Ramsnehi Education Hub</p>
                    <p className="text-sm text-muted-foreground">2020 - 2022</p>
                    <p className="text-sm text-muted-foreground">Intermediate, Percentage: 93.00%</p>
                  </div>
                  <div className="space-y-0">
                    <p className="font-medium">Ramsnehi Education Hub</p>
                    <p className="text-sm text-muted-foreground">2018 - 2020</p>
                    <p className="text-sm text-muted-foreground">Matriculation, Percentage: 83.17%</p>
                  </div>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" /> Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        {/* <p className="font-medium">
                          Full Stack Developer Intern
                        </p> */}
                        <p className="text-sm text-muted-foreground">
                          Worked on various projects including a E-Commerce Product Recommendation System, Speech Recognition, WaterMark Logo Detection Mechanism
                        </p>
                        {/* <p className="text-sm text-muted-foreground">
                          Since March 2025
                        </p> */}
                      </div>
                      {/* <div> */}
                        {/* <p className="font-medium">Graphic Designer</p> */}
                        {/* <p className="text-sm text-muted-foreground">
                          SLIIT Media Unit
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Freelance
                        </p> */}
                      {/* </div> */}
                      {/* <div className="flex items-center space-x-2">
                              <Award className="text-indigo-600" />
                              <h3 className="text-xl font-semibold">Achievements</h3>
                      </div> */}
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" /> Achievements
                      </h3>
                      <div>
                        {/* <p className="font-medium">
                          Full Stack Developer Intern
                        </p> */}
                        <p className="text-sm text-muted-foreground">
                          Solved 100+ problems on coding platforms, ans earned certificatesin Machine Learning and NLP
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Column */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="w-40 h-40 border-4 border-primary/20">
                <AvatarImage
                  src="/imgs/profile.png"
                  alt="Manohar Solanki"
                  loading="lazy"
                />
                <AvatarFallback>NS</AvatarFallback>
              </Avatar>
              {/* <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                3.41 GPA
              </div> */}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold">Manohar Solanki</h3>
              <p className="text-muted-foreground">
                Machine Learning Enthusiast | C++ Programmer | Problem Solver
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <Badge variant="outline" className="bg-primary/10">
                ML Algorithms
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                C++
              </Badge>
              {/* <Badge variant="outline" className="bg-primary/10">
                Python
              </Badge> */}
              <Badge variant="outline" className="bg-primary/10">
                DSA
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="gap-2" asChild onClick={handledownload}>
                <a href={resumeUrl} download="Aathif_Zahir_CV.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
