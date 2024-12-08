
const pregnancyWeeksData = [
    {
        week: 1,
        foods: [
          {
            src: "https://example.com/images/meal1-week1.jpg",
            title: "Avocado Smoothie",
            description: "A nutrient-rich smoothie to start your day with essential vitamins."
          },
          {
            src: "https://example.com/images/meal2-week1.jpg",
            title: "Whole Grain Salad",
            description: "A refreshing salad with quinoa, kale, and citrus dressing."
          }
        ],
        exercises: [
          {
            src: "https://i.pinimg.com/736x/72/7e/b5/727eb57e74e32f27fbe714f090ee7539.jpg",
            title: "Prenatal Yoga",
            description: "Gentle yoga poses to improve flexibility and relaxation."
          },
          {
            src: "https://example.com/images/exercise2-week1.jpg",
            title: "Walking",
            description: "A brisk 20-minute walk to boost your energy and mood."
          }
        ]
      },
      {
        week: 2,
        foods: [
          {
            src: "https://example.com/images/meal1-week2.jpg",
            title: "Berry Oatmeal",
            description: "A warm bowl of oatmeal topped with fresh berries and honey."
          },
          {
            src: "https://example.com/images/meal2-week2.jpg",
            title: "Grilled Chicken Wrap",
            description: "A whole-grain wrap with grilled chicken, avocado, and spinach."
          }
        ],
        exercises: [
          {
            src: "https://example.com/images/exercise1-week2.jpg",
            title: "Stretching Routine",
            description: "Simple stretches to improve flexibility and reduce back pain."
          },
          {
            src: "https://example.com/images/exercise2-week2.jpg",
            title: "Swimming",
            description: "A low-impact exercise to strengthen muscles and improve circulation."
          }
        ]
      },
      {
        week: 3,
        foods: [
          {
            src: "https://example.com/images/meal1-week3.jpg",
            title: "Greek Yogurt Parfait",
            description: "Layered yogurt, granola, and mixed berries for a nutritious snack."
          },
          {
            src: "https://example.com/images/meal2-week3.jpg",
            title: "Veggie Stir Fry",
            description: "A quick and colorful stir fry with bell peppers, broccoli, and tofu."
          }
        ],
        exercises: [
          {
            src: "https://example.com/images/exercise1-week3.jpg",
            title: "Light Cardio",
            description: "Low-intensity cardio exercises to keep your heart healthy."
          },
          {
            src: "https://example.com/images/exercise2-week3.jpg",
            title: "Pelvic Floor Exercises",
            description: "Strengthen your pelvic floor muscles to prepare for delivery."
          }
        ]
      },
      {
        week: 4,
        foods: [
          {
            src: "https://example.com/images/meal1-week4.jpg",
            title: "Chia Pudding",
            description: "Chia seeds soaked in almond milk with a touch of honey and vanilla."
          },
          {
            src: "https://example.com/images/meal2-week4.jpg",
            title: "Quinoa Salad",
            description: "A fresh salad with quinoa, spinach, tomatoes, and a lemon vinaigrette."
          }
        ],
        exercises: [
          {
            src: "https://example.com/images/exercise1-week4.jpg",
            title: "Prenatal Pilates",
            description: "Gentle pilates to strengthen your core and improve posture."
          },
          {
            src: "https://example.com/images/exercise2-week4.jpg",
            title: "Squats",
            description: "Bodyweight squats to strengthen your legs and improve stability."
          }
        ]
      },
      {
        week: 5,
        foods: [
          {
            src: "https://example.com/images/meal1-week5.jpg",
            title: "Sweet Potato Bowl",
            description: "Roasted sweet potatoes with black beans, avocado, and a tangy dressing."
          },
          {
            src: "https://example.com/images/meal2-week5.jpg",
            title: "Lentil Soup",
            description: "A hearty lentil soup packed with protein and vegetables."
          }
        ],
        exercises: [
          {
            src: "https://example.com/images/exercise1-week5.jpg",
            title: "Gentle Stretching",
            description: "A set of gentle stretches for relaxation and flexibility."
          },
          {
            src: "https://example.com/images/exercise2-week5.jpg",
            title: "Walking",
            description: "A 30-minute walk to boost circulation and improve your mood."
          }
        ]
      },
      {
        week: 6,
        foods: [
          {
            src: "https://example.com/images/meal1-week6.jpg",
            title: "Egg and Avocado Toast",
            description: "Whole-grain toast topped with avocado and a fried egg."
          },
          {
            src: "https://example.com/images/meal2-week6.jpg",
            title: "Grilled Salmon",
            description: "Grilled salmon with a side of steamed broccoli and quinoa."
          }
        ],
        exercises: [
          {
            src: "https://example.com/images/exercise1-week6.jpg",
            title: "Prenatal Yoga",
            description: "Breathing exercises and gentle poses to relax and relieve tension."
          },
          {
            src: "https://example.com/images/exercise2-week6.jpg",
            title: "Pelvic Tilts",
            description: "Pelvic tilts to reduce back pain and strengthen your lower back."
          }
        ]
      },
      {
        week: 7,
        foods: [
          {
            src: "https://example.com/images/meal1-week7.jpg",
            title: "Low-fat Greek Yogurt",
            description: "A bowl of low-fat Greek yogurt with honey and fresh berries."
          },
          {
            src: "https://example.com/images/meal2-week7.jpg",
            title: "Chicken Caesar Salad",
            description: "A fresh Caesar salad with grilled chicken, croutons, and parmesan."
          }
        ],
        exercises: [
          {
            src: "https://example.com/images/exercise1-week7.jpg",
            title: "Low-Impact Aerobics",
            description: "An aerobic exercise to get your heart rate up without putting too much stress on your joints."
          },
          {
            src: "https://example.com/images/exercise2-week7.jpg",
            title: "Side Leg Raises",
            description: "Side leg raises to strengthen your hip muscles and improve mobility."
          }
        ]
      },
      {
        week: 8,
        foods: [
          {
            src: "https://example.com/images/meal1-week8.jpg",
            title: "Greek Salad",
            description: "A light and refreshing Greek salad with feta cheese, olives, and tomatoes."
          },
          {
            src: "https://example.com/images/meal2-week8.jpg",
            title: "Chickpea Stew",
            description: "A hearty stew made with chickpeas, carrots, and spinach."
          }
        ],
        exercises: [
          {
            src: "https://example.com/images/exercise1-week8.jpg",
            title: "Prenatal Walking",
            description: "A brisk walk to keep your heart healthy while minimizing strain on your body."
          },
          {
            src: "https://example.com/images/exercise2-week8.jpg",
            title: "Wall Push-ups",
            description: "Modified push-ups against a wall to strengthen your upper body."
          }
        ]
      },
      {
        week: 9,
        foods: [
          {
            src: "https://example.com/images/meal1-week9.jpg",
            title: "Vegetable Stir Fry",
            description: "A colorful stir fry made with fresh vegetables and tofu."
          },
          {
            src: "https://example.com/images/meal2-week9.jpg",
            title: "Oatmeal with Fruit",
            description: "A bowl of oatmeal topped with bananas, berries, and chia seeds."
          }
        ],
        exercises: [
          {
            src: "https://example.com/images/exercise1-week9.jpg",
            title: "Kegel Exercises",
            description: "Exercises to strengthen your pelvic floor muscles."
          },
          {
            src: "https://example.com/images/exercise2-week9.jpg",
            title: "Prenatal Pilates",
            description: "A gentle pilates session to improve flexibility and posture."
          }
        ]
      },
      {
        week: 10,
        foods: [
          {
            src: "https://example.com/images/meal1-week10.jpg",
            title: "Egg Salad",
            description: "A light egg salad with avocado, mixed greens, and a lemon dressing."
          },
          {
            src: "https://example.com/images/meal2-week10.jpg",
            title: "Chicken and Veggie Soup",
            description: "A nourishing soup made with chicken, carrots, and spinach."
          }
        ],
        exercises: [
          {
            src: "https://example.com/images/exercise1-week10.jpg",
            title: "Prenatal Yoga",
            description: "A gentle yoga session to help relax your muscles and improve flexibility."
          },
          {
            src: "https://example.com/images/exercise2-week10.jpg",
            title: "Hip Circles",
            description: "Gentle hip circles to relieve discomfort and prepare for labor."
          }
        ]
      },
       
            {
              week: 11,
              foods: [
                {
                  src: "https://example.com/images/meal1-week11.jpg",
                  title: "Avocado Toast",
                  description: "Whole-grain toast topped with smashed avocado and a sprinkle of chia seeds."
                },
                {
                  src: "https://example.com/images/meal2-week11.jpg",
                  title: "Quinoa Salad",
                  description: "A refreshing salad with quinoa, cherry tomatoes, cucumbers, and lemon vinaigrette."
                },
                {
                  src: "https://example.com/images/meal1-week11.jpg",
                  title: "Avocado Toast",
                  description: "Whole-grain toast topped with smashed avocado and a sprinkle of chia seeds."
                },
                {
                  src: "https://example.com/images/meal2-week11.jpg",
                  title: "Quinoa Salad",
                  description: "A refreshing salad with quinoa, cherry tomatoes, cucumbers, and lemon vinaigrette."
                }
              ],
              exercises: [
                {
                  src: "https://example.com/images/exercise1-week11.jpg",
                  title: "Pelvic Tilts",
                  description: "Simple pelvic tilts to strengthen your core and ease back pain."
                },
                {
                  src: "https://example.com/images/exercise2-week11.jpg",
                  title: "Walking",
                  description: "Brisk walking for cardiovascular health and overall fitness."
                }
              ]
            },
            {
              week: 12,
              foods: [
                {
                  src: "https://example.com/images/meal1-week12.jpg",
                  title: "Greek Yogurt Parfait",
                  description: "Layers of Greek yogurt, granola, and fresh berries."
                },
                {
                  src: "https://example.com/images/meal2-week12.jpg",
                  title: "Stuffed Bell Peppers",
                  description: "Bell peppers stuffed with lean ground turkey and vegetables."
                }
              ],
              exercises: [
                {
                  src: "https://example.com/images/exercise1-week12.jpg",
                  title: "Cat-Cow Stretches",
                  description: "A yoga stretch to improve spinal flexibility and relieve tension."
                },
                {
                  src: "https://example.com/images/exercise2-week12.jpg",
                  title: "Wall Push-Ups",
                  description: "A low-impact push-up variation for upper body strength."
                }
              ]
            },
            {
              week: 13,
              foods: [
                {
                  src: "https://example.com/images/meal1-week13.jpg",
                  title: "Chicken Stir-Fry",
                  description: "Stir-fried chicken with colorful bell peppers and broccoli over brown rice."
                },
                {
                  src: "https://example.com/images/meal2-week13.jpg",
                  title: "Spinach and Feta Omelet",
                  description: "A protein-packed omelet with fresh spinach and crumbled feta cheese."
                }
              ],
              exercises: [
                {
                  src: "https://example.com/images/exercise1-week13.jpg",
                  title: "Arm Circles",
                  description: "Gentle arm circles to improve shoulder mobility and blood flow."
                },
                {
                  src: "https://example.com/images/exercise2-week13.jpg",
                  title: "Prenatal Dance",
                  description: "A fun, light dance routine to boost your mood and energy."
                }
              ]
            },
            {
              week: 14,
              foods: [
                {
                  src: "https://example.com/images/meal1-week14.jpg",
                  title: "Turkey and Cheese Wrap",
                  description: "A whole-grain wrap filled with lean turkey, cheese, and greens."
                },
                {
                  src: "https://example.com/images/meal2-week14.jpg",
                  title: "Vegetable Lentil Soup",
                  description: "Hearty soup with lentils, carrots, and celery."
                }
              ],
              exercises: [
                {
                  src: "https://example.com/images/exercise1-week14.jpg",
                  title: "Kegel Exercises",
                  description: "Strengthen pelvic floor muscles with simple Kegel routines."
                },
                {
                  src: "https://example.com/images/exercise2-week14.jpg",
                  title: "Light Stretching",
                  description: "Full-body stretches to relieve tension and improve flexibility."
                }
              ]
            },
            {
              week: 15,
              foods: [
                {
                  src: "https://example.com/images/meal1-week15.jpg",
                  title: "Grilled Salmon",
                  description: "Salmon fillet served with steamed asparagus and quinoa."
                },
                {
                  src: "https://example.com/images/meal2-week15.jpg",
                  title: "Berry Smoothie Bowl",
                  description: "A smoothie bowl topped with fresh berries and shredded coconut."
                }
              ],
              exercises: [
                {
                  src: "https://example.com/images/exercise1-week15.jpg",
                  title: "Side Planks",
                  description: "Gentle side planks to strengthen your core and improve stability."
                },
                {
                  src: "https://example.com/images/exercise2-week15.jpg",
                  title: "Walking Lunges",
                  description: "Low-impact lunges to build lower body strength."
                }
              ]
            },
            {
              week: 16,
              foods: [
                {
                  src: "https://example.com/images/meal1-week16.jpg",
                  title: "Caprese Salad",
                  description: "Fresh mozzarella, tomatoes, and basil drizzled with olive oil."
                },
                {
                  src: "https://example.com/images/meal2-week16.jpg",
                  title: "Chicken and Veggie Skewers",
                  description: "Grilled chicken and vegetables served with a side of hummus."
                }
              ],
              exercises: [
                {
                  src: "https://example.com/images/exercise1-week16.jpg",
                  title: "Seated Forward Bend",
                  description: "Stretch your hamstrings and lower back with this seated yoga pose."
                },
                {
                  src: "https://example.com/images/exercise2-week16.jpg",
                  title: "Arm Raises",
                  description: "Simple arm lifts to maintain shoulder mobility and strength."
                }
              ]
            },
            {
              week: 17,
              foods: [
                {
                  src: "https://example.com/images/meal1-week17.jpg",
                  title: "Turkey Chili",
                  description: "A hearty chili made with lean turkey and kidney beans."
                },
                {
                  src: "https://example.com/images/meal2-week17.jpg",
                  title: "Spinach Quiche",
                  description: "A savory quiche filled with spinach and cheese."
                }
              ],
              exercises: [
                {
                  src: "https://example.com/images/exercise1-week17.jpg",
                  title: "Butterfly Stretch",
                  description: "Stretch your inner thighs and hips with this gentle pose."
                },
                {
                  src: "https://example.com/images/exercise2-week17.jpg",
                  title: "Chair Pose",
                  description: "A yoga pose to strengthen your thighs and improve balance."
                }
              ]
            },
            {
              week: 18,
              foods: [
                {
                  src: "https://example.com/images/meal1-week18.jpg",
                  title: "Stuffed Sweet Potato",
                  description: "A baked sweet potato stuffed with black beans and salsa."
                },
                {
                  src: "https://example.com/images/meal2-week18.jpg",
                  title: "Grilled Shrimp Salad",
                  description: "Fresh greens topped with grilled shrimp and avocado slices."
                }
              ],
              exercises: [
                {
                  src: "https://example.com/images/exercise1-week18.jpg",
                  title: "Modified Push-Ups",
                  description: "Strengthen your arms and chest with modified push-ups on your knees."
                },
                {
                  src: "https://example.com/images/exercise2-week18.jpg",
                  title: "Pelvic Rocking",
                  description: "Gentle pelvic rocking to ease lower back tension."
                }
              ]
            },
            {
              week: 19,
              foods: [
                {
                  src: "https://example.com/images/meal1-week19.jpg",
                  title: "Vegetable Stir-Fry",
                  description: "A vibrant mix of stir-fried vegetables served with tofu."
                },
                {
                  src: "https://example.com/images/meal2-week19.jpg",
                  title: "Chicken Caesar Wrap",
                  description: "A whole-grain wrap filled with grilled chicken and Caesar dressing."
                }
              ],
              exercises: [
                {
                  src: "https://example.com/images/exercise1-week19.jpg",
                  title: "Tailor Sitting",
                  description: "A seated pose to strengthen your back and improve posture."
                },
                {
                  src: "https://example.com/images/exercise2-week19.jpg",
                  title: "Prenatal Aqua Aerobics",
                  description: "Low-impact water aerobics for relaxation and muscle tone."
                }
              ]
            },
            {
              week: 20,
              foods: [
                {
                  src: "https://example.com/images/meal1-week20.jpg",
                  title: "Pasta Primavera",
                  description: "Whole-grain pasta tossed with fresh vegetables and olive oil."
                },
                {
                  src: "https://example.com/images/meal2-week20.jpg",
                  title: "Greek Salad",
                  description: "A mix of cucumbers, tomatoes, olives, and feta cheese with olive oil dressing."
                }
              ],
              exercises: [
                {
                  src: "https://example.com/images/exercise1-week20.jpg",
                  title: "Leg Stretches",
                  description: "Stretch your legs and calves to relieve muscle tightness."
                },
                {
                  src: "https://example.com/images/exercise2-week20.jpg",
                  title: "Prenatal Side Planks",
                  description: "A modified plank exercise to strengthen your core safely."
                }
              ]
            }
          ,
          
        {
          week: 13,
          actions: ["Schedule your next prenatal check-up.", "Begin tracking fetal movements if noticeable."],
          exercises: ["Kegel exercises for pelvic floor strength.", "Light dancing or movement to music."],
          foods: ["Folic acid-rich foods like broccoli and beans.", "Vitamin D sources like eggs and mushrooms."],
          normal: ["Mild round ligament pain.", "Feeling more energetic."],
          emergency: ["Severe pelvic pain.", "Severe vomiting (hyperemesis gravidarum)."]
        },
        {
          week: 14,
          actions: ["Plan a pregnancy-safe vacation or outing.", "Look into pregnancy fitness apps."],
          exercises: ["Gentle back stretches.", "Walking for 20 minutes daily."],
          foods: ["Calcium-fortified plant-based milk.", "Fresh salads with colorful vegetables."],
          normal: ["Noticeable bump starting to show.", "Mild nasal congestion."],
          emergency: ["Persistent high fever.", "Shortness of breath."]
        },
        {
          week: 15,
          actions: ["Shop for a comfortable maternity pillow.", "Begin taking belly photos to document growth."],
          exercises: ["Side-lying leg lifts.", "Seated stretching routines."],
          foods: ["Protein-rich foods like lean meat and tofu.", "Hydrating fruits like watermelon."],
          normal: ["Feeling baby flutters for the first time.", "Frequent urination."],
          emergency: ["Severe back pain.", "Intense cramping."]
        },
        {
          week: 16,
          actions: ["Update your pregnancy journal with milestones.", "Schedule an anatomy scan for Week 20."],
          exercises: ["Prenatal yoga focused on hip flexibility.", "Light arm strengthening with small weights."],
          foods: ["Vitamin A sources like carrots and sweet potatoes.", "Healthy fats from avocado and nuts."],
          normal: ["Mild heartburn.", "Skin glowing or breakouts."],
          emergency: ["Bleeding or fluid leakage.", "Sudden sharp pain in abdomen."]
        },
        {
          week: 17,
          actions: ["Research baby products and gear.", "Sign up for childbirth education classes."],
          exercises: ["Wall push-ups.", "Leg stretches to relieve tension."],
          foods: ["Magnesium-rich foods like almonds and spinach.", "Berries for antioxidants."],
          normal: ["Increased appetite.", "Occasional dizziness."],
          emergency: ["Severe swelling.", "Decreased fetal movements."]
        },
        {
          week: 18,
          actions: ["Plan your maternity leave with your employer.", "Choose a healthcare provider for the baby."],
          exercises: ["Light swimming for relaxation.", "Standing leg lifts for stability."],
          foods: ["Calcium-rich dairy or fortified milk.", "Protein shakes if needed."],
          normal: ["Backaches.", "Mild leg cramps."],
          emergency: ["Severe headache.", "Blurred or double vision."]
        },
        {
          week: 19,
          actions: ["Start creating a birth plan.", "Explore meditation for mental calmness."],
          exercises: ["Gentle squats to strengthen legs.", "Daily short walks to improve circulation."],
          foods: ["Lean proteins like chicken and fish.", "Vitamin C fruits like strawberries."],
          normal: ["Vivid dreams.", "Mild swelling in feet."],
          emergency: ["Sharp pains in ribs.", "Rapid weight gain or loss."]
        },
        {
          week: 20,
          actions: ["Celebrate the halfway milestone!", "Start a playlist for labor and delivery."],
          exercises: ["Prenatal yoga focused on breathing.", "Seated torso twists (gentle)."],
          foods: ["Fiber-rich foods like beans and lentils.", "Whole-grain bread or pasta."],
          normal: ["Braxton Hicks contractions (mild).", "Skin changes, including dryness."],
          emergency: ["High fever.", "Signs of infection (chills, severe pain)."]
        }
     ,
        {
          week: 21,
          actions: ["Start thinking about baby-proofing your home.", "Plan a babymoon or a relaxing getaway."],
          exercises: ["Prenatal yoga for lower back pain.", "Light resistance training for arms and legs."],
          foods: ["Vitamin E-rich foods like sunflower seeds and almonds.", "Fruits high in fiber, like pears."],
          normal: ["Mild swelling in feet and ankles.", "Increased baby movements."],
          emergency: ["Severe swelling in hands or face.", "Sharp pain in lower abdomen."]
        },
        {
          week: 22,
          actions: ["Set up a maternity photo shoot.", "Continue tracking baby movements."],
          exercises: ["Pelvic tilts to strengthen your core.", "Walking for 20-30 minutes daily."],
          foods: ["Leafy greens like kale and spinach.", "Omega-3 sources like flaxseeds and salmon."],
          normal: ["Mild stretch marks.", "Occasional Braxton Hicks contractions."],
          emergency: ["Decreased fetal movement.", "Severe headaches."]
        },
        {
          week: 23,
          actions: ["Research parenting styles and techniques.", "Plan your baby shower."],
          exercises: ["Stretching exercises for better posture.", "Gentle prenatal aerobics."],
          foods: ["Calcium-rich dairy products.", "Iron-rich foods like red meat and beans."],
          normal: ["Increased appetite.", "Mild lower back discomfort."],
          emergency: ["Blurred vision.", "Heavy vaginal bleeding."]
        },
        {
          week: 24,
          actions: ["Take a gestational diabetes test if recommended.", "Finalize your baby registry."],
          exercises: ["Gentle squats for pelvic flexibility.", "Prenatal swimming."],
          foods: ["Vitamin C-rich foods like oranges and tomatoes.", "Whole grains for sustained energy."],
          normal: ["Tingling or numbness in hands.", "Occasional leg cramps."],
          emergency: ["Persistent pain in the side or back.", "Signs of preterm labor."]
        },
        {
          week: 25,
          actions: ["Buy comfortable maternity clothes.", "Prepare a hospital bag checklist."],
          exercises: ["Kegel exercises to strengthen pelvic floor.", "Side-lying stretches for relaxation."],
          foods: ["Protein sources like eggs and lean meats.", "Hydrating fruits like watermelon."],
          normal: ["Mild swelling in ankles and feet.", "More vivid dreams."],
          emergency: ["Sudden weight gain.", "Severe shortness of breath."]
        },
        {
          week: 26,
          actions: ["Take a prenatal class on labor and delivery.", "Create a soothing bedtime routine."],
          exercises: ["Prenatal yoga focusing on breathing techniques.", "Gentle seated twists (modified)."],
          foods: ["Magnesium-rich foods like bananas and avocados.", "Calcium-fortified plant milk."],
          normal: ["Skin changes, like darkening around nipples.", "Mild discomfort in ribs."],
          emergency: ["Constant severe abdominal pain.", "Leakage of amniotic fluid."]
        },
        {
          week: 27,
          actions: ["Research pediatricians and schedule interviews.", "Start organizing the nursery."],
          exercises: ["Wall push-ups for upper body strength.", "Walking with light ankle weights."],
          foods: ["Vitamin D-rich foods like mushrooms.", "Zinc-rich foods like pumpkin seeds."],
          normal: ["Mild backaches.", "Mild forgetfulness or 'baby brain.'"],
          emergency: ["Signs of a urinary tract infection.", "Persistent severe headache."]
        },
        {
          week: 28,
          actions: ["Schedule your glucose tolerance test.", "Consider joining a pregnancy support group."],
          exercises: ["Prenatal yoga for hip flexibility.", "Light dancing for cardio."],
          foods: ["Iron-fortified cereals.", "High-protein snacks like Greek yogurt."],
          normal: ["Mild fatigue returns.", "Difficulty sleeping due to belly size."],
          emergency: ["Severe itching, especially on palms and soles.", "Sudden loss of vision."]
        },
        {
          week: 29,
          actions: ["Start preparing a hospital bag.", "Discuss birth preferences with your healthcare provider."],
          exercises: ["Leg stretches to prevent cramps.", "Light walking to reduce swelling."],
          foods: ["Vitamin B-rich foods like whole grains and bananas.", "Calcium sources like milk and cheese."],
          normal: ["Shortness of breath as baby grows.", "Frequent urination."],
          emergency: ["Heavy vaginal bleeding.", "Severe swelling in hands or face."]
        },
        {
          week: 30,
          actions: ["Practice relaxation techniques for labor.", "Update your birth plan if needed."],
          exercises: ["Gentle pelvic tilts for lower back pain relief.", "Prenatal Pilates for core strength."],
          foods: ["Omega-3 sources like walnuts.", "Hydrating foods like cucumber and melons."],
          normal: ["More pronounced Braxton Hicks contractions.", "Heartburn or indigestion."],
          emergency: ["Sudden sharp abdominal pain.", "High fever without a clear cause."]
        }
     ,
        {
          week: 31,
          actions: ["Begin perineal massage to prepare for childbirth.", "Arrange for childcare if you have other kids."],
          exercises: ["Cat-cow stretches for back relief.", "Seated pelvic tilts for flexibility."],
          foods: ["Vitamin A-rich foods like sweet potatoes.", "Iron-rich foods like lentils and spinach."],
          normal: ["Frequent urination as the baby presses on the bladder.", "Mild swelling in hands and feet."],
          emergency: ["Severe swelling, particularly in hands and face.", "Sudden or severe abdominal pain."]
        },
        {
          week: 32,
          actions: ["Discuss postpartum recovery with your doctor.", "Install and inspect the baby car seat."],
          exercises: ["Butterfly stretches to open up the hips.", "Walking for improved circulation."],
          foods: ["Magnesium-rich foods like nuts and seeds.", "Hydrating fruits like watermelon and oranges."],
          normal: ["Leaking colostrum from breasts.", "Shortness of breath due to baby's position."],
          emergency: ["Persistent chest pain.", "Reduced fetal movement."]
        },
        {
          week: 33,
          actions: ["Prepare a list of baby names if you haven’t yet.", "Pack your hospital bag with essentials."],
          exercises: ["Prenatal yoga focusing on deep breathing.", "Light arm exercises with resistance bands."],
          foods: ["High-protein foods like eggs and tofu.", "Folic acid-rich foods like leafy greens."],
          normal: ["Pelvic pressure as baby moves lower.", "Mild cramps in legs or feet."],
          emergency: ["Preterm labor signs (e.g., consistent contractions).", "Fluid leakage or heavy bleeding."]
        },
        {
          week: 34,
          actions: ["Take a breastfeeding class if planning to nurse.", "Finalize your birth plan and share it with your provider."],
          exercises: ["Side-lying leg lifts for hip strength.", "Kegel exercises to prepare for delivery."],
          foods: ["Vitamin D-rich foods like fortified cereals.", "Potassium-rich foods like bananas."],
          normal: ["Trouble sleeping due to belly size or baby movements.", "Increased Braxton Hicks contractions."],
          emergency: ["Intense pelvic pain.", "Signs of a urinary tract infection."]
        },
        {
          week: 35,
          actions: ["Plan postpartum meals and snacks.", "Practice deep breathing and relaxation techniques."],
          exercises: ["Gentle stretches for legs and back.", "Walking to promote circulation."],
          foods: ["Whole grains for sustained energy.", "Calcium-rich foods like yogurt and cheese."],
          normal: ["Frequent urination and pressure in pelvic area.", "Mild heartburn or indigestion."],
          emergency: ["Severe headache with vision changes.", "Heavy vaginal bleeding."]
        },
        {
          week: 36,
          actions: ["Schedule weekly prenatal visits with your doctor.", "Wash and organize baby clothes and items."],
          exercises: ["Gentle squats for pelvic floor strength.", "Prenatal swimming or floating for relaxation."],
          foods: ["Healthy fats like avocados.", "Iron-rich snacks like dried fruits."],
          normal: ["Baby dropping lower into the pelvis (lightening).", "Increased vaginal discharge."],
          emergency: ["Consistent and painful contractions.", "Severe swelling or sudden weight gain."]
        },
        {
          week: 1,
          foods: [
            {
              src: "https://example.com/images/meal1-week1.jpg",
              title: "Avocado Smoothie",
              description: "A nutrient-rich smoothie to start your day with essential vitamins."
            },
            {
              src: "https://example.com/images/meal2-week1.jpg",
              title: "Whole Grain Salad",
              description: "A refreshing salad with quinoa, kale, and citrus dressing."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week1.jpg",
              title: "Prenatal Yoga",
              description: "Gentle yoga poses to improve flexibility and relaxation."
            },
            {
              src: "https://example.com/images/exercise2-week1.jpg",
              title: "Walking",
              description: "A brisk 20-minute walk to boost your energy and mood."
            }
          ]
        },
        {
          week: 2,
          foods: [
            {
              src: "https://example.com/images/meal1-week2.jpg",
              title: "Berry Oatmeal",
              description: "A warm bowl of oatmeal topped with fresh berries and honey."
            },
            {
              src: "https://example.com/images/meal2-week2.jpg",
              title: "Grilled Chicken Wrap",
              description: "A whole-grain wrap with grilled chicken, avocado, and spinach."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week2.jpg",
              title: "Stretching Routine",
              description: "Simple stretches to improve flexibility and reduce back pain."
            },
            {
              src: "https://example.com/images/exercise2-week2.jpg",
              title: "Swimming",
              description: "A low-impact exercise to strengthen muscles and improve circulation."
            }
          ]
        },
        {
          week: 3,
          foods: [
            {
              src: "https://example.com/images/meal1-week3.jpg",
              title: "Greek Yogurt Parfait",
              description: "Layered yogurt, granola, and mixed berries for a nutritious snack."
            },
            {
              src: "https://example.com/images/meal2-week3.jpg",
              title: "Veggie Stir Fry",
              description: "A quick and colorful stir fry with bell peppers, broccoli, and tofu."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week3.jpg",
              title: "Light Cardio",
              description: "Low-intensity cardio exercises to keep your heart healthy."
            },
            {
              src: "https://example.com/images/exercise2-week3.jpg",
              title: "Pelvic Floor Exercises",
              description: "Strengthen your pelvic floor muscles to prepare for delivery."
            }
          ]
        },
        {
          week: 4,
          foods: [
            {
              src: "https://example.com/images/meal1-week4.jpg",
              title: "Chia Pudding",
              description: "Chia seeds soaked in almond milk with a touch of honey and vanilla."
            },
            {
              src: "https://example.com/images/meal2-week4.jpg",
              title: "Quinoa Salad",
              description: "A fresh salad with quinoa, spinach, tomatoes, and a lemon vinaigrette."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week4.jpg",
              title: "Prenatal Pilates",
              description: "Gentle pilates to strengthen your core and improve posture."
            },
            {
              src: "https://example.com/images/exercise2-week4.jpg",
              title: "Squats",
              description: "Bodyweight squats to strengthen your legs and improve stability."
            }
          ]
        },
        {
          week: 5,
          foods: [
            {
              src: "https://example.com/images/meal1-week5.jpg",
              title: "Sweet Potato Bowl",
              description: "Roasted sweet potatoes with black beans, avocado, and a tangy dressing."
            },
            {
              src: "https://example.com/images/meal2-week5.jpg",
              title: "Lentil Soup",
              description: "A hearty lentil soup packed with protein and vegetables."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week5.jpg",
              title: "Gentle Stretching",
              description: "A set of gentle stretches for relaxation and flexibility."
            },
            {
              src: "https://example.com/images/exercise2-week5.jpg",
              title: "Walking",
              description: "A 30-minute walk to boost circulation and improve your mood."
            }
          ]
        },
        {
          week: 6,
          foods: [
            {
              src: "https://example.com/images/meal1-week6.jpg",
              title: "Egg and Avocado Toast",
              description: "Whole-grain toast topped with avocado and a fried egg."
            },
            {
              src: "https://example.com/images/meal2-week6.jpg",
              title: "Grilled Salmon",
              description: "Grilled salmon with a side of steamed broccoli and quinoa."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week6.jpg",
              title: "Prenatal Yoga",
              description: "Breathing exercises and gentle poses to relax and relieve tension."
            },
            {
              src: "https://example.com/images/exercise2-week6.jpg",
              title: "Pelvic Tilts",
              description: "Pelvic tilts to reduce back pain and strengthen your lower back."
            }
          ]
        },
        {
          week: 7,
          foods: [
            {
              src: "https://example.com/images/meal1-week7.jpg",
              title: "Low-fat Greek Yogurt",
              description: "A bowl of low-fat Greek yogurt with honey and fresh berries."
            },
            {
              src: "https://example.com/images/meal2-week7.jpg",
              title: "Chicken Caesar Salad",
              description: "A fresh Caesar salad with grilled chicken, croutons, and parmesan."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week7.jpg",
              title: "Low-Impact Aerobics",
              description: "An aerobic exercise to get your heart rate up without putting too much stress on your joints."
            },
            {
              src: "https://example.com/images/exercise2-week7.jpg",
              title: "Side Leg Raises",
              description: "Side leg raises to strengthen your hip muscles and improve mobility."
            }
          ]
        },
        {
          week: 8,
          foods: [
            {
              src: "https://example.com/images/meal1-week8.jpg",
              title: "Greek Salad",
              description: "A light and refreshing Greek salad with feta cheese, olives, and tomatoes."
            },
            {
              src: "https://example.com/images/meal2-week8.jpg",
              title: "Chickpea Stew",
              description: "A hearty stew made with chickpeas, carrots, and spinach."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week8.jpg",
              title: "Prenatal Walking",
              description: "A brisk walk to keep your heart healthy while minimizing strain on your body."
            },
            {
              src: "https://example.com/images/exercise2-week8.jpg",
              title: "Wall Push-ups",
              description: "Modified push-ups against a wall to strengthen your upper body."
            }
          ]
        },
        {
          week: 9,
          foods: [
            {
              src: "https://example.com/images/meal1-week9.jpg",
              title: "Vegetable Stir Fry",
              description: "A colorful stir fry made with fresh vegetables and tofu."
            },
            {
              src: "https://example.com/images/meal2-week9.jpg",
              title: "Oatmeal with Fruit",
              description: "A bowl of oatmeal topped with bananas, berries, and chia seeds."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week9.jpg",
              title: "Kegel Exercises",
              description: "Exercises to strengthen your pelvic floor muscles."
            },
            {
              src: "https://example.com/images/exercise2-week9.jpg",
              title: "Prenatal Pilates",
              description: "A gentle pilates session to improve flexibility and posture."
            }
          ]
        },
        {
          week: 10,
          foods: [
            {
              src: "https://example.com/images/meal1-week10.jpg",
              title: "Egg Salad",
              description: "A light egg salad with avocado, mixed greens, and a lemon dressing."
            },
            {
              src: "https://example.com/images/meal2-week10.jpg",
              title: "Chicken and Veggie Soup",
              description: "A nourishing soup made with chicken, carrots, and spinach."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week10.jpg",
              title: "Prenatal Yoga",
              description: "A gentle yoga session to help relax your muscles and improve flexibility."
            },
            {
              src: "https://example.com/images/exercise2-week10.jpg",
              title: "Hip Circles",
              description: "Gentle hip circles to relieve discomfort and prepare for labor."
            }
          ]
        },
        {
          week: 11,
          foods: [
            {
              src: "https://example.com/images/meal1-week11.jpg",
              title: "Spinach Smoothie",
              description: "A delicious green smoothie packed with iron-rich spinach."
            },
            {
              src: "https://example.com/images/meal2-week11.jpg",
              title: "Chicken Tacos",
              description: "Whole wheat tortillas filled with grilled chicken, salsa, and avocado."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week11.jpg",
              title: "Prenatal Yoga",
              description: "Yoga poses to relieve lower back pain and improve posture."
            },
            {
              src: "https://example.com/images/exercise2-week11.jpg",
              title: "Low Impact Aerobics",
              description: "A light aerobics workout to boost circulation and energy."
            }
          ]
        },
        {
          week: 12,
          foods: [
            {
              src: "https://example.com/images/meal1-week12.jpg",
              title: "Vegetarian Chili",
              description: "A hearty and flavorful vegetarian chili made with beans and spices."
            },
            {
              src: "https://example.com/images/meal2-week12.jpg",
              title: "Salmon Salad",
              description: "A fresh salad with grilled salmon, mixed greens, and a lemon dressing."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week12.jpg",
              title: "Walking",
              description: "A 30-minute walk to enhance circulation and mental clarity."
            },
            {
              src: "https://example.com/images/exercise2-week12.jpg",
              title: "Pelvic Floor Exercises",
              description: "Targeted exercises to strengthen your pelvic floor muscles."
            }
          ]
        }
   
     ,
        {
          week: 21,
          foods: [
            {
              src: "https://example.com/images/meal1-week21.jpg",
              title: "Avocado Toast",
              description: "Whole-grain toast topped with mashed avocado and a sprinkle of chia seeds."
            },
            {
              src: "https://example.com/images/meal2-week21.jpg",
              title: "Chicken Salad",
              description: "Grilled chicken on a bed of mixed greens, with cucumbers and a lemon dressing."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week21.jpg",
              title: "Prenatal Pilates",
              description: "Strengthen your core with gentle pilates exercises tailored for pregnancy."
            },
            {
              src: "https://example.com/images/exercise2-week21.jpg",
              title: "Hip Stretch",
              description: "Gentle hip stretches to relieve tension and increase flexibility."
            }
          ]
        },
        {
          week: 22,
          foods: [
            {
              src: "https://example.com/images/meal1-week22.jpg",
              title: "Greek Yogurt Parfait",
              description: "A parfait made with Greek yogurt, granola, and fresh berries."
            },
            {
              src: "https://example.com/images/meal2-week22.jpg",
              title: "Lentil Soup",
              description: "A hearty soup with lentils, carrots, and spinach, perfect for a filling meal."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week22.jpg",
              title: "Swimming",
              description: "A low-impact activity that helps build muscle and improve circulation."
            },
            {
              src: "https://example.com/images/exercise2-week22.jpg",
              title: "Walking Lunges",
              description: "Gentle lunges that stretch your legs and strengthen your hips."
            }
          ]
        },
        {
          week: 23,
          foods: [
            {
              src: "https://example.com/images/meal1-week23.jpg",
              title: "Veggie Stir Fry",
              description: "A quick stir-fry with bell peppers, broccoli, and tofu, served over brown rice."
            },
            {
              src: "https://example.com/images/meal2-week23.jpg",
              title: "Salmon and Quinoa",
              description: "Grilled salmon served with quinoa and a side of steamed vegetables."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week23.jpg",
              title: "Prenatal Yoga",
              description: "Flowing yoga poses that increase flexibility and help reduce stress."
            },
            {
              src: "https://example.com/images/exercise2-week23.jpg",
              title: "Side-Lying Leg Raises",
              description: "Strengthen your hips and glutes with side-lying leg raises."
            }
          ]
        },
        {
          week: 24,
          foods: [
            {
              src: "https://example.com/images/meal1-week24.jpg",
              title: "Sweet Potato Fries",
              description: "Oven-baked sweet potato fries seasoned with olive oil and spices."
            },
            {
              src: "https://example.com/images/meal2-week24.jpg",
              title: "Chickpea Salad",
              description: "A fresh salad with chickpeas, cucumbers, tomatoes, and a lemon dressing."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week24.jpg",
              title: "Swimming",
              description: "Low-impact swimming sessions to strengthen muscles and improve circulation."
            },
            {
              src: "https://example.com/images/exercise2-week24.jpg",
              title: "Kegel Exercises",
              description: "Strengthen your pelvic floor muscles with Kegel exercises."
            }
          ]
        },
        {
          week: 25,
          foods: [
            {
              src: "https://example.com/images/meal1-week25.jpg",
              title: "Mango Smoothie",
              description: "A refreshing smoothie made with mango, almond milk, and a touch of honey."
            },
            {
              src: "https://example.com/images/meal2-week25.jpg",
              title: "Chicken Wrap",
              description: "Grilled chicken wrapped in a whole-grain tortilla with spinach and hummus."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week25.jpg",
              title: "Pelvic Tilt Exercise",
              description: "Gentle pelvic tilts to strengthen your lower back and pelvis."
            },
            {
              src: "https://example.com/images/exercise2-week25.jpg",
              title: "Prenatal Yoga",
              description: "Gentle yoga poses to reduce back pain and improve posture."
            }
          ]
        },
        {
          week: 26,
          foods: [
            {
              src: "https://example.com/images/meal1-week26.jpg",
              title: "Chicken Caesar Salad",
              description: "A fresh salad with grilled chicken, romaine lettuce, and a light Caesar dressing."
            },
            {
              src: "https://example.com/images/meal2-week26.jpg",
              title: "Egg Salad Sandwich",
              description: "A sandwich with egg salad, whole-grain bread, and lettuce."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week26.jpg",
              title: "Side Plank",
              description: "Side planks to strengthen your obliques and improve core stability."
            },
            {
              src: "https://example.com/images/exercise2-week26.jpg",
              title: "Walking",
              description: "A brisk 30-minute walk to enhance circulation and energy."
            }
          ]
        },
        {
          week: 27,
          foods: [
            {
              src: "https://example.com/images/meal1-week27.jpg",
              title: "Veggie Wrap",
              description: "A whole-grain wrap with avocado, hummus, and fresh vegetables."
            },
            {
              src: "https://example.com/images/meal2-week27.jpg",
              title: "Baked Salmon",
              description: "Baked salmon with a side of roasted Brussels sprouts and quinoa."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week27.jpg",
              title: "Swimming",
              description: "Low-impact exercise to enhance cardiovascular health and muscle strength."
            },
            {
              src: "https://example.com/images/exercise2-week27.jpg",
              title: "Squats",
              description: "Bodyweight squats to strengthen your legs and improve balance."
            }
          ]
        },
        {
          week: 28,
          foods: [
            {
              src: "https://example.com/images/meal1-week28.jpg",
              title: "Tomato Soup",
              description: "A warm, comforting tomato soup made with fresh tomatoes and basil."
            },
            {
              src: "https://example.com/images/meal2-week28.jpg",
              title: "Avocado Toast",
              description: "Whole-grain toast with mashed avocado, a sprinkle of sesame seeds, and lemon juice."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week28.jpg",
              title: "Pelvic Floor Exercises",
              description: "Strengthening exercises for your pelvic muscles to prepare for labor."
            },
            {
              src: "https://example.com/images/exercise2-week28.jpg",
              title: "Prenatal Stretching",
              description: "Gentle stretches to improve flexibility and reduce pregnancy discomfort."
            }
          ]
        },
        {
          week: 29,
          foods: [
            {
              src: "https://example.com/images/meal1-week29.jpg",
              title: "Cucumber Salad",
              description: "A refreshing cucumber salad with tomatoes, feta cheese, and olives."
            },
            {
              src: "https://example.com/images/meal2-week29.jpg",
              title: "Tofu Stir Fry",
              description: "A flavorful stir-fry with tofu, bell peppers, and soy sauce."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week29.jpg",
              title: "Leg Swings",
              description: "Swing your legs forward and backward to improve hip mobility."
            },
            {
              src: "https://example.com/images/exercise2-week29.jpg",
              title: "Side-Lying Leg Lifts",
              description: "Strengthen your hips and glutes with side-lying leg lifts."
            }
          ]
        },
        {
          week: 30,
          foods: [
            {
              src: "https://example.com/images/meal1-week30.jpg",
              title: "Egg Muffins",
              description: "Egg muffins with spinach, cheese, and a variety of vegetables."
            },
            {
              src: "https://example.com/images/meal2-week30.jpg",
              title: "Chicken Soup",
              description: "A hearty chicken soup with carrots, celery, and a variety of spices."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week30.jpg",
              title: "Walking",
              description: "A daily walk to maintain circulation and boost energy."
            },
            {
              src: "https://example.com/images/exercise2-week30.jpg",
              title: "Prenatal Yoga",
              description: "Prenatal yoga to relieve tension and improve overall well-being."
            }
          ]
        },
        {
          week: 31,
          foods: [
            {
              src: "https://example.com/images/meal1-week31.jpg",
              title: "Fruit Salad",
              description: "A refreshing fruit salad with seasonal fruits and a honey-lime dressing."
            },
            {
              src: "https://example.com/images/meal2-week31.jpg",
              title: "Grilled Veggie Wrap",
              description: "A whole-grain wrap filled with grilled vegetables and hummus."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week31.jpg",
              title: "Bodyweight Squats",
              description: "Perform bodyweight squats to strengthen your legs and improve posture."
            },
            {
              src: "https://example.com/images/exercise2-week31.jpg",
              title: "Walking Lunges",
              description: "Walking lunges to tone your legs and improve your balance."
            }
          ]
        },
        {
          week: 32,
          foods: [
            {
              src: "https://example.com/images/meal1-week32.jpg",
              title: "Grilled Cheese Sandwich",
              description: "A grilled cheese sandwich with whole-grain bread and a side of tomato soup."
            },
            {
              src: "https://example.com/images/meal2-week32.jpg",
              title: "Vegetable Curry",
              description: "A mild vegetable curry with rice, packed with flavor and nutrients."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week32.jpg",
              title: "Leg Raises",
              description: "Lie on your back and raise your legs to strengthen your core and legs."
            },
            {
              src: "https://example.com/images/exercise2-week32.jpg",
              title: "Prenatal Swimming",
              description: "Low-impact swimming for relaxation and muscle strength."
            }
          ]
        },
        {
          week: 33,
          foods: [
            {
              src: "https://example.com/images/meal1-week33.jpg",
              title: "Chicken Tacos",
              description: "Soft tortillas filled with grilled chicken, lettuce, and salsa."
            },
            {
              src: "https://example.com/images/meal2-week33.jpg",
              title: "Baked Ziti",
              description: "Baked ziti with marinara sauce, mozzarella cheese, and fresh basil."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week33.jpg",
              title: "Prenatal Yoga",
              description: "Gentle yoga poses for improved flexibility and relaxation."
            },
            {
              src: "https://example.com/images/exercise2-week33.jpg",
              title: "Squats",
              description: "Bodyweight squats to strengthen your lower body and improve posture."
            }
          ]
        },
        {
          week: 34,
          foods: [
            {
              src: "https://example.com/images/meal1-week34.jpg",
              title: "Vegetable Soup",
              description: "A comforting vegetable soup with a variety of seasonal vegetables."
            },
            {
              src: "https://example.com/images/meal2-week34.jpg",
              title: "Chicken Salad",
              description: "Grilled chicken mixed with greens, cucumbers, and a light vinaigrette."
            }
          ],
          exercises: [
            {
              src: "https://example.com/images/exercise1-week34.jpg",
              title: "Prenatal Pilates",
              description: "Gentle Pilates exercises that focus on posture and balance."
            },
            {
              src: "https://example.com/images/exercise2-week34.jpg",
              title: "Side-Lying Leg Lifts",
              description: "Strengthen your hips and glutes with side-lying leg lifts."
            }
          ]
        }
      ];
  

export default pregnancyWeeksData

// const pregnancyWeeksData = [
//     {
//       week: 1,
//       actions: ["Start tracking your menstrual cycle.", "Begin a prenatal vitamin routine."],
//       exercises: ["Gentle stretches for relaxation.", "5-minute breathing exercises."],
//       foods: ["Leafy greens like spinach.", "Whole grains and fortified cereals."],
//       normal: ["Mild cramping and fatigue.", "Mood swings and breast tenderness."],
//       emergency: ["Heavy bleeding.", "Severe abdominal pain."]
//     },
//     {
//       week: 2,
//       actions: ["Schedule a doctor’s appointment for prenatal care.", "Ensure adequate hydration daily."],
//       exercises: ["Walking for 10-15 minutes.", "Pelvic floor strengthening exercises."],
//       foods: ["Fruits like oranges and bananas.", "Lean protein such as chicken or tofu."],
//       normal: ["Increased appetite.", "Slight spotting."],
//       emergency: ["Severe nausea leading to dehydration.", "Sharp pelvic pain."]
//     },
//     {
//       week: 3,
//       actions: ["Start a pregnancy journal.", "Avoid alcohol and smoking completely."],
//       exercises: ["Light yoga focusing on breathing.", "Leg raises to improve circulation."],
//       foods: ["Iron-rich foods like lentils.", "Calcium sources like milk or yogurt."],
//       normal: ["Mild headaches.", "Feeling bloated."],
//       emergency: ["Heavy spotting or bleeding.", "Dizziness or fainting."]
//     },
//     {
//       week: 4,
//       actions: ["Share the exciting news with your partner.", "Begin monitoring your diet carefully."],
//       exercises: ["Stretching the lower back gently.", "Walking or swimming."],
//       foods: ["Omega-3 rich foods like fish (limit mercury).", "Fresh salads with avocados."],
//       normal: ["Nausea in the morning.", "Breast soreness."],
//       emergency: ["Shortness of breath.", "Persistent vomiting."]
//     },
//     {
//       week: 5,
//       actions: ["Read up on pregnancy health.", "Reduce caffeine intake."],
//       exercises: ["Kegel exercises for pelvic strength.", "Gentle arm and shoulder stretches."],
//       foods: ["Beans and legumes for protein.", "Vitamin D fortified foods like eggs."],
//       normal: ["Frequent urination.", "Mood swings."],
//       emergency: ["High fever.", "Sharp, stabbing pains."]
//     },
//     {
//       week: 6,
//       actions: ["Join a pregnancy support group.", "Get more rest as fatigue increases."],
//       exercises: ["Gentle neck and shoulder rolls.", "10-minute walk post-meals."],
//       foods: ["Fiber-rich options like oats.", "Vitamin B12 foods like fortified cereals."],
//       normal: ["Mild dizziness.", "Increased sense of smell."],
//       emergency: ["Blurry vision.", "Intense migraines."]
//     },
//     {
//       week: 7,
//       actions: ["Start planning your first prenatal visit.", "Practice mindfulness or meditation."],
//       exercises: ["Light resistance band exercises.", "Stretching with a yoga ball."],
//       foods: ["Nuts and seeds for healthy fats.", "Cooked vegetables like carrots."],
//       normal: ["Low energy levels.", "Breast changes."],
//       emergency: ["Pelvic pain with fever.", "Continuous nausea and vomiting."]
//     },
//     {
//       week: 8,
//       actions: ["Track your baby’s growth milestones.", "Stay active with light activities."],
//       exercises: ["Cat-cow stretch for the spine.", "Side-lying leg lifts."],
//       foods: ["Calcium-rich snacks like cheese.", "Hydrating fruits like watermelon."],
//       normal: ["Occasional cramps.", "Increased thirst."],
//       emergency: ["Bleeding with clots.", "Rapid heartbeat."]
//     },
//     {
//       week: 9,
//       actions: ["Create a self-care routine.", "Plan for healthy snacks throughout the day."],
//       exercises: ["Modified squats to build strength.", "Walking with light ankle weights."],
//       foods: ["Broccoli and leafy greens for folate.", "Vitamin C-rich fruits like oranges."],
//       normal: ["Mild nausea.", "Dry skin or chapped lips."],
//       emergency: ["Severe abdominal cramping.", "Swelling in hands or face."]
//     }
// ,     // Weeks 1–9 already defined...
//         {
//           week: 10,
//           actions: ["Start preparing a maternity wardrobe.", "Plan for your first trimester ultrasound."],
//           exercises: ["Gentle prenatal yoga.", "10-minute light cardio (walking or stationary cycling)."],
//           foods: ["Vitamin C-rich foods like citrus fruits.", "Calcium sources such as yogurt and milk."],
//           normal: ["Mild fatigue and increased urination.", "Nausea subsiding."],
//           emergency: ["Intense abdominal cramps.", "High fever."]
//         },
//         {
//           week: 11,
//           actions: ["Focus on self-care and relaxation.", "Explore prenatal classes in your area."],
//           exercises: ["Stretching exercises for flexibility.", "Low-impact swimming."],
//           foods: ["Iron-rich foods like spinach and lentils.", "Snack on nuts and seeds."],
//           normal: ["Increased appetite and mild weight gain.", "Mood fluctuations."],
//           emergency: ["Heavy bleeding.", "Dizziness and fainting spells."]
//         },
//         {
//           week: 12,
//           actions: ["Start thinking about baby names.", "Discuss genetic screenings with your doctor."],
//           exercises: ["Prenatal Pilates to strengthen the core.", "Light resistance band exercises."],
//           foods: ["Omega-3-rich foods like salmon.", "Whole grains like oats and quinoa."],
//           normal: ["Mild headaches.", "Changes in skin pigmentation (dark patches)."],
//           emergency: ["Blurred vision.", "Swelling in hands or face."]
//         },
//         {
//           week: 13,
//           actions: ["Schedule your next prenatal check-up.", "Begin tracking fetal movements if noticeable."],
//           exercises: ["Kegel exercises for pelvic floor strength.", "Light dancing or movement to music."],
//           foods: ["Folic acid-rich foods like broccoli and beans.", "Vitamin D sources like eggs and mushrooms."],
//           normal: ["Mild round ligament pain.", "Feeling more energetic."],
//           emergency: ["Severe pelvic pain.", "Severe vomiting (hyperemesis gravidarum)."]
//         },
//         {
//           week: 14,
//           actions: ["Plan a pregnancy-safe vacation or outing.", "Look into pregnancy fitness apps."],
//           exercises: ["Gentle back stretches.", "Walking for 20 minutes daily."],
//           foods: ["Calcium-fortified plant-based milk.", "Fresh salads with colorful vegetables."],
//           normal: ["Noticeable bump starting to show.", "Mild nasal congestion."],
//           emergency: ["Persistent high fever.", "Shortness of breath."]
//         },
//         {
//           week: 15,
//           actions: ["Shop for a comfortable maternity pillow.", "Begin taking belly photos to document growth."],
//           exercises: ["Side-lying leg lifts.", "Seated stretching routines."],
//           foods: ["Protein-rich foods like lean meat and tofu.", "Hydrating fruits like watermelon."],
//           normal: ["Feeling baby flutters for the first time.", "Frequent urination."],
//           emergency: ["Severe back pain.", "Intense cramping."]
//         },
//         {
//           week: 16,
//           actions: ["Update your pregnancy journal with milestones.", "Schedule an anatomy scan for Week 20."],
//           exercises: ["Prenatal yoga focused on hip flexibility.", "Light arm strengthening with small weights."],
//           foods: ["Vitamin A sources like carrots and sweet potatoes.", "Healthy fats from avocado and nuts."],
//           normal: ["Mild heartburn.", "Skin glowing or breakouts."],
//           emergency: ["Bleeding or fluid leakage.", "Sudden sharp pain in abdomen."]
//         },
//         {
//           week: 17,
//           actions: ["Research baby products and gear.", "Sign up for childbirth education classes."],
//           exercises: ["Wall push-ups.", "Leg stretches to relieve tension."],
//           foods: ["Magnesium-rich foods like almonds and spinach.", "Berries for antioxidants."],
//           normal: ["Increased appetite.", "Occasional dizziness."],
//           emergency: ["Severe swelling.", "Decreased fetal movements."]
//         },
//         {
//           week: 18,
//           actions: ["Plan your maternity leave with your employer.", "Choose a healthcare provider for the baby."],
//           exercises: ["Light swimming for relaxation.", "Standing leg lifts for stability."],
//           foods: ["Calcium-rich dairy or fortified milk.", "Protein shakes if needed."],
//           normal: ["Backaches.", "Mild leg cramps."],
//           emergency: ["Severe headache.", "Blurred or double vision."]
//         },
//         {
//           week: 19,
//           actions: ["Start creating a birth plan.", "Explore meditation for mental calmness."],
//           exercises: ["Gentle squats to strengthen legs.", "Daily short walks to improve circulation."],
//           foods: ["Lean proteins like chicken and fish.", "Vitamin C fruits like strawberries."],
//           normal: ["Vivid dreams.", "Mild swelling in feet."],
//           emergency: ["Sharp pains in ribs.", "Rapid weight gain or loss."]
//         },
//         {
//           week: 20,
//           actions: ["Celebrate the halfway milestone!", "Start a playlist for labor and delivery."],
//           exercises: ["Prenatal yoga focused on breathing.", "Seated torso twists (gentle)."],
//           foods: ["Fiber-rich foods like beans and lentils.", "Whole-grain bread or pasta."],
//           normal: ["Braxton Hicks contractions (mild).", "Skin changes, including dryness."],
//           emergency: ["High fever.", "Signs of infection (chills, severe pain)."]
//         }
//      ,
//         {
//           week: 21,
//           actions: ["Start thinking about baby-proofing your home.", "Plan a babymoon or a relaxing getaway."],
//           exercises: ["Prenatal yoga for lower back pain.", "Light resistance training for arms and legs."],
//           foods: ["Vitamin E-rich foods like sunflower seeds and almonds.", "Fruits high in fiber, like pears."],
//           normal: ["Mild swelling in feet and ankles.", "Increased baby movements."],
//           emergency: ["Severe swelling in hands or face.", "Sharp pain in lower abdomen."]
//         },
//         {
//           week: 22,
//           actions: ["Set up a maternity photo shoot.", "Continue tracking baby movements."],
//           exercises: ["Pelvic tilts to strengthen your core.", "Walking for 20-30 minutes daily."],
//           foods: ["Leafy greens like kale and spinach.", "Omega-3 sources like flaxseeds and salmon."],
//           normal: ["Mild stretch marks.", "Occasional Braxton Hicks contractions."],
//           emergency: ["Decreased fetal movement.", "Severe headaches."]
//         },
//         {
//           week: 23,
//           actions: ["Research parenting styles and techniques.", "Plan your baby shower."],
//           exercises: ["Stretching exercises for better posture.", "Gentle prenatal aerobics."],
//           foods: ["Calcium-rich dairy products.", "Iron-rich foods like red meat and beans."],
//           normal: ["Increased appetite.", "Mild lower back discomfort."],
//           emergency: ["Blurred vision.", "Heavy vaginal bleeding."]
//         },
//         {
//           week: 24,
//           actions: ["Take a gestational diabetes test if recommended.", "Finalize your baby registry."],
//           exercises: ["Gentle squats for pelvic flexibility.", "Prenatal swimming."],
//           foods: ["Vitamin C-rich foods like oranges and tomatoes.", "Whole grains for sustained energy."],
//           normal: ["Tingling or numbness in hands.", "Occasional leg cramps."],
//           emergency: ["Persistent pain in the side or back.", "Signs of preterm labor."]
//         },
//         {
//           week: 25,
//           actions: ["Buy comfortable maternity clothes.", "Prepare a hospital bag checklist."],
//           exercises: ["Kegel exercises to strengthen pelvic floor.", "Side-lying stretches for relaxation."],
//           foods: ["Protein sources like eggs and lean meats.", "Hydrating fruits like watermelon."],
//           normal: ["Mild swelling in ankles and feet.", "More vivid dreams."],
//           emergency: ["Sudden weight gain.", "Severe shortness of breath."]
//         },
//         {
//           week: 26,
//           actions: ["Take a prenatal class on labor and delivery.", "Create a soothing bedtime routine."],
//           exercises: ["Prenatal yoga focusing on breathing techniques.", "Gentle seated twists (modified)."],
//           foods: ["Magnesium-rich foods like bananas and avocados.", "Calcium-fortified plant milk."],
//           normal: ["Skin changes, like darkening around nipples.", "Mild discomfort in ribs."],
//           emergency: ["Constant severe abdominal pain.", "Leakage of amniotic fluid."]
//         },
//         {
//           week: 27,
//           actions: ["Research pediatricians and schedule interviews.", "Start organizing the nursery."],
//           exercises: ["Wall push-ups for upper body strength.", "Walking with light ankle weights."],
//           foods: ["Vitamin D-rich foods like mushrooms.", "Zinc-rich foods like pumpkin seeds."],
//           normal: ["Mild backaches.", "Mild forgetfulness or 'baby brain.'"],
//           emergency: ["Signs of a urinary tract infection.", "Persistent severe headache."]
//         },
//         {
//           week: 28,
//           actions: ["Schedule your glucose tolerance test.", "Consider joining a pregnancy support group."],
//           exercises: ["Prenatal yoga for hip flexibility.", "Light dancing for cardio."],
//           foods: ["Iron-fortified cereals.", "High-protein snacks like Greek yogurt."],
//           normal: ["Mild fatigue returns.", "Difficulty sleeping due to belly size."],
//           emergency: ["Severe itching, especially on palms and soles.", "Sudden loss of vision."]
//         },
//         {
//           week: 29,
//           actions: ["Start preparing a hospital bag.", "Discuss birth preferences with your healthcare provider."],
//           exercises: ["Leg stretches to prevent cramps.", "Light walking to reduce swelling."],
//           foods: ["Vitamin B-rich foods like whole grains and bananas.", "Calcium sources like milk and cheese."],
//           normal: ["Shortness of breath as baby grows.", "Frequent urination."],
//           emergency: ["Heavy vaginal bleeding.", "Severe swelling in hands or face."]
//         },
//         {
//           week: 30,
//           actions: ["Practice relaxation techniques for labor.", "Update your birth plan if needed."],
//           exercises: ["Gentle pelvic tilts for lower back pain relief.", "Prenatal Pilates for core strength."],
//           foods: ["Omega-3 sources like walnuts.", "Hydrating foods like cucumber and melons."],
//           normal: ["More pronounced Braxton Hicks contractions.", "Heartburn or indigestion."],
//           emergency: ["Sudden sharp abdominal pain.", "High fever without a clear cause."]
//         }
//      ,
//         {
//           week: 31,
//           actions: ["Begin perineal massage to prepare for childbirth.", "Arrange for childcare if you have other kids."],
//           exercises: ["Cat-cow stretches for back relief.", "Seated pelvic tilts for flexibility."],
//           foods: ["Vitamin A-rich foods like sweet potatoes.", "Iron-rich foods like lentils and spinach."],
//           normal: ["Frequent urination as the baby presses on the bladder.", "Mild swelling in hands and feet."],
//           emergency: ["Severe swelling, particularly in hands and face.", "Sudden or severe abdominal pain."]
//         },
//         {
//           week: 32,
//           actions: ["Discuss postpartum recovery with your doctor.", "Install and inspect the baby car seat."],
//           exercises: ["Butterfly stretches to open up the hips.", "Walking for improved circulation."],
//           foods: ["Magnesium-rich foods like nuts and seeds.", "Hydrating fruits like watermelon and oranges."],
//           normal: ["Leaking colostrum from breasts.", "Shortness of breath due to baby's position."],
//           emergency: ["Persistent chest pain.", "Reduced fetal movement."]
//         },
//         {
//           week: 33,
//           actions: ["Prepare a list of baby names if you haven’t yet.", "Pack your hospital bag with essentials."],
//           exercises: ["Prenatal yoga focusing on deep breathing.", "Light arm exercises with resistance bands."],
//           foods: ["High-protein foods like eggs and tofu.", "Folic acid-rich foods like leafy greens."],
//           normal: ["Pelvic pressure as baby moves lower.", "Mild cramps in legs or feet."],
//           emergency: ["Preterm labor signs (e.g., consistent contractions).", "Fluid leakage or heavy bleeding."]
//         },
//         {
//           week: 34,
//           actions: ["Take a breastfeeding class if planning to nurse.", "Finalize your birth plan and share it with your provider."],
//           exercises: ["Side-lying leg lifts for hip strength.", "Kegel exercises to prepare for delivery."],
//           foods: ["Vitamin D-rich foods like fortified cereals.", "Potassium-rich foods like bananas."],
//           normal: ["Trouble sleeping due to belly size or baby movements.", "Increased Braxton Hicks contractions."],
//           emergency: ["Intense pelvic pain.", "Signs of a urinary tract infection."]
//         },
//         {
//           week: 35,
//           actions: ["Plan postpartum meals and snacks.", "Practice deep breathing and relaxation techniques."],
//           exercises: ["Gentle stretches for legs and back.", "Walking to promote circulation."],
//           foods: ["Whole grains for sustained energy.", "Calcium-rich foods like yogurt and cheese."],
//           normal: ["Frequent urination and pressure in pelvic area.", "Mild heartburn or indigestion."],
//           emergency: ["Severe headache with vision changes.", "Heavy vaginal bleeding."]
//         },
//         {
//           week: 36,
//           actions: ["Schedule weekly prenatal visits with your doctor.", "Wash and organize baby clothes and items."],
//           exercises: ["Gentle squats for pelvic floor strength.", "Prenatal swimming or floating for relaxation."],
//           foods: ["Healthy fats like avocados.", "Iron-rich snacks like dried fruits."],
//           normal: ["Baby dropping lower into the pelvis (lightening).", "Increased vaginal discharge."],
//           emergency: ["Consistent and painful contractions.", "Severe swelling or sudden weight gain."]
//         }
    
      
      
//   ];
  