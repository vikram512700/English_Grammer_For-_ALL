/* ============================================================
   data.js – All content data for English Master Pro
   Grammar, Tenses, Vocabulary, Reading, Writing, Speaking,
   Pronunciation, Listening, Achievements
   ============================================================ */

const EMP_DATA = {

  /* ── MODULES ──────────────────────────────────────────── */
  modules: [
    { id:'grammar',      icon:'📖', name:'Grammar Academy',   color:'#6c63ff', questions: 500 },
    { id:'tenses',       icon:'⏱️', name:'Tense Mastery',     color:'#ff6584', questions: 600 },
    { id:'vocabulary',   icon:'🔤', name:'Vocabulary Builder', color:'#43e97b', questions: 300 },
    { id:'reading',      icon:'📰', name:'Reading Hub',        color:'#ffd166', questions: 200 },
    { id:'writing',      icon:'✍️', name:'Writing Studio',     color:'#118ab2', questions: 150 },
    { id:'listening',    icon:'🎧', name:'Listening Center',   color:'#06d6a0', questions: 120 },
    { id:'speaking',     icon:'🎤', name:'Speaking Lab',       color:'#ef476f', questions: 200 },
    { id:'pronunciation',icon:'🗣️', name:'Pronunciation Lab',  color:'#ffa552', questions: 100 },
    { id:'assessment',   icon:'📝', name:'Assessments',        color:'#9b59b6', questions: 200 },
  ],

  /* ── GRAMMAR TOPICS ───────────────────────────────────── */
  grammarTopics: [
    {
      id:'nouns', icon:'🏷️', name:'Nouns', level:'beginner',
      desc:'Persons, places, things, or ideas. The building blocks of every sentence.',
      lesson: {
        intro: 'A noun is a word that names a person, place, thing, or idea.',
        explanation: 'Nouns can be proper (names of specific people/places) or common (general things). They can be concrete (tangible) or abstract (ideas/feelings).',
        examples: [
          'The <b>dog</b> barked loudly. (common, concrete noun)',
          '<b>London</b> is a beautiful city. (proper noun)',
          '<b>Happiness</b> is the key to success. (abstract noun)',
          'The <b>children</b> played in the park. (plural noun)',
        ],
        tip: '💡 Tip: Nouns can function as subjects, objects, or complements in a sentence.'
      },
      questions: [
        { q:'Which of the following is a proper noun?', opts:['city','London','house','dog'], ans:1, hint:'Proper nouns name specific people, places, or things.', exp:'London is a specific city name, hence a proper noun.' },
        { q:'Identify the noun in: "Honesty is the best policy."', opts:['is','the','best','Honesty'], ans:3, hint:'An abstract noun names an idea or quality.', exp:'Honesty is an abstract noun naming a quality.' },
        { q:'Which word is a collective noun?', opts:['team','run','blue','quickly'], ans:0, hint:'A collective noun refers to a group of people or things.', exp:'Team refers to a group of people, making it a collective noun.' },
        { q:'"She bought a new car." — The noun in this sentence is:', opts:['bought','new','car','She'], ans:2, hint:'Look for the word that names a thing.', exp:'Car is a concrete noun naming a thing.' },
        { q:'Which of the following is an abstract noun?', opts:['table','freedom','apple','river'], ans:1, hint:'Abstract nouns name ideas, emotions, or qualities.', exp:'Freedom is an abstract noun as it represents an idea.' },
        { q:'The plural of "child" is:', opts:['childs','childes','children','child'], ans:2, hint:'Some nouns have irregular plurals.', exp:'The irregular plural of child is children.' },
        { q:'Which noun is uncountable?', opts:['book','water','pen','chair'], ans:1, hint:'Uncountable nouns cannot be counted individually.', exp:'Water is an uncountable noun.' },
        { q:'"The committee has made its decision." — Committee is a:', opts:['proper noun','abstract noun','collective noun','material noun'], ans:2, hint:'It refers to a group.', exp:'Committee refers to a group of people, so it is a collective noun.' },
        { q:'Which is a compound noun?', opts:['run','beautiful','toothbrush','slowly'], ans:2, hint:'Compound nouns are formed from two or more words.', exp:'Toothbrush is a compound noun made of tooth + brush.' },
        { q:'"Gold is expensive." — Gold is a:', opts:['common noun','proper noun','material noun','collective noun'], ans:2, hint:'It names a material or substance.', exp:'Gold is a material noun as it refers to a substance.' },
      ]
    },
    {
      id:'pronouns', icon:'👤', name:'Pronouns', level:'beginner',
      desc:'Words used in place of nouns to avoid repetition.',
      lesson: {
        intro: 'A pronoun is a word used in place of a noun.',
        explanation: 'Pronouns help avoid repetition. Types include personal (I, he, she), possessive (my, his), reflexive (myself), relative (who, which), and interrogative (what, who).',
        examples: [
          '<b>She</b> is a doctor. (personal pronoun)',
          'The book is <b>mine</b>. (possessive pronoun)',
          'He hurt <b>himself</b>. (reflexive pronoun)',
          'The man <b>who</b> called you is here. (relative pronoun)',
        ],
        tip: '💡 Tip: Personal pronouns have different forms for subject (I/he) and object (me/him).'
      },
      questions: [
        { q:'Which is a personal pronoun?', opts:['mine','they','itself','who'], ans:1, hint:'Personal pronouns refer to people.', exp:'They is a personal pronoun used for groups.' },
        { q:'"That book is ___." Complete with a possessive pronoun.', opts:['he','mine','I','who'], ans:1, hint:'Possessive pronouns show ownership.', exp:'Mine is a possessive pronoun showing the book belongs to me.' },
        { q:'Which pronoun is reflexive?', opts:['we','they','herself','ours'], ans:2, hint:'Reflexive pronouns end in -self or -selves.', exp:'Herself is a reflexive pronoun.' },
        { q:'"___ is calling?" — Which interrogative pronoun fits?', opts:['Which','Who','Whose','Whom'], ans:1, hint:'Use this pronoun to ask about a person as subject.', exp:'Who is used to ask about the subject of a sentence.' },
        { q:'"The car ___ I bought is red." — Fill in the relative pronoun.', opts:['who','whom','which','whose'], ans:2, hint:'Use this relative pronoun for things.', exp:'Which is used as a relative pronoun for things.' },
        { q:'Identify the demonstrative pronoun: "Take ___."', opts:['this','herself','who','mine'], ans:0, hint:'Demonstrative pronouns point to things.', exp:'This is a demonstrative pronoun pointing to something nearby.' },
        { q:'Which sentence uses an indefinite pronoun?', opts:['She called me.','Who is there?','Everyone knows it.','That is mine.'], ans:2, hint:'Indefinite pronouns refer to non-specific people or things.', exp:'Everyone is an indefinite pronoun.' },
        { q:'"The students hurt ___." Complete with the correct reflexive pronoun.', opts:['himself','themselves','herself','itself'], ans:1, hint:'Match the pronoun with the subject students (plural).', exp:'Themselves matches the plural subject students.' },
        { q:'What is the objective form of "I"?', opts:['my','mine','me','myself'], ans:2, hint:'The objective case is used when the pronoun is an object.', exp:'Me is the objective form of I.' },
        { q:'"___ pen is this?" — Which pronoun fits?', opts:['Who','Whose','Whom','Which'], ans:1, hint:'Use this pronoun to ask about possession.', exp:'Whose is used to ask about ownership.' },
      ]
    },
    {
      id:'verbs', icon:'⚡', name:'Verbs', level:'beginner',
      desc:'Action words that describe what the subject does or is.',
      lesson: {
        intro: 'A verb is a word that expresses an action, state, or occurrence.',
        explanation: 'Main verbs can be action verbs (run, eat) or linking verbs (is, seem). Auxiliary verbs (has, will, can) help form tenses and moods.',
        examples: [
          'She <b>runs</b> every morning. (action verb)',
          'He <b>is</b> a teacher. (linking verb)',
          'They <b>have</b> finished their work. (auxiliary verb)',
          'You <b>should</b> study harder. (modal verb)',
        ],
        tip: '💡 Tip: Every sentence must have at least one verb!'
      },
      questions: [
        { q:'Which word is an action verb?', opts:['happy','quickly','jump','beautiful'], ans:2, hint:'Action verbs describe what someone does.', exp:'Jump describes an action, so it is an action verb.' },
        { q:'"She seems tired." — The verb here is:', opts:['action verb','linking verb','auxiliary verb','modal verb'], ans:1, hint:'This verb connects the subject to a description.', exp:'Seems is a linking verb connecting she to tired.' },
        { q:'Which is a modal verb?', opts:['run','could','eaten','playing'], ans:1, hint:'Modal verbs express possibility, ability, or necessity.', exp:'Could is a modal verb expressing ability or possibility.' },
        { q:'"They ___ playing football." — Fill in the auxiliary verb.', opts:['were','run','plays','jumps'], ans:0, hint:'The auxiliary verb should match they in past tense.', exp:'Were is the correct auxiliary verb for they in past continuous.' },
        { q:'What is the past tense of "go"?', opts:['goed','gone','went','goes'], ans:2, hint:'Go has an irregular past tense.', exp:'The irregular past tense of go is went.' },
        { q:'Identify the verb: "The baby cried all night."', opts:['baby','all','night','cried'], ans:3, hint:'Look for the word that shows what the baby did.', exp:'Cried is the action verb.' },
        { q:'Which verb is in the perfect tense?', opts:['I eat','I ate','I have eaten','I will eat'], ans:2, hint:'Perfect tense uses have/has + past participle.', exp:'I have eaten uses have + past participle eaten.' },
        { q:'"Can you help me?" — Can is a:', opts:['action verb','linking verb','modal verb','participle'], ans:2, hint:'This verb expresses ability.', exp:'Can is a modal verb expressing ability.' },
        { q:'The third-person singular of "write" is:', opts:['write','wrote','writes','written'], ans:2, hint:'Add -s or -es for third-person singular present.', exp:'Writes is the third-person singular form.' },
        { q:'Which is an irregular verb?', opts:['walk','talk','sing','jump'], ans:2, hint:'Irregular verbs do not follow the regular -ed pattern.', exp:'Sing is irregular: sing → sang → sung.' },
      ]
    },
    {
      id:'adjectives', icon:'🎨', name:'Adjectives', level:'beginner',
      desc:'Words that describe or modify nouns.',
      lesson: {
        intro: 'An adjective is a word that describes or modifies a noun or pronoun.',
        explanation: 'Adjectives can describe quality (good, bad), quantity (some, many), size (big, small), color, shape, and more. They can appear before a noun (attributive) or after a linking verb (predicative).',
        examples: [
          'She has a <b>beautiful</b> voice. (attributive)',
          'The flowers are <b>colorful</b>. (predicative)',
          '<b>Three</b> cats sat on the mat. (numeral adjective)',
          'He is a <b>tall</b>, <b>handsome</b> man. (multiple adjectives)',
        ],
        tip: '💡 Tip: When using multiple adjectives, follow the order: opinion, size, age, shape, color, origin, material, purpose.'
      },
      questions: [
        { q:'"She wore a red dress." — The adjective is:', opts:['wore','dress','red','She'], ans:2, hint:'The adjective describes the noun dress.', exp:'Red is an adjective describing the noun dress.' },
        { q:'Which of the following is a comparative adjective?', opts:['good','better','best','well'], ans:1, hint:'Comparative adjectives compare two things.', exp:'Better is the comparative form of good.' },
        { q:'What is the superlative form of "hot"?', opts:['hotter','hottest','most hot','hotest'], ans:1, hint:'For one-syllable adjectives, add -est.', exp:'Hottest is the superlative form of hot (double the t).' },
        { q:'An adjective that comes before a noun is called:', opts:['predicative','attributive','demonstrative','interrogative'], ans:1, hint:'Think of its position relative to the noun.', exp:'An adjective used before a noun is called attributive.' },
        { q:'"This is the ___ book I have ever read." — Use superlative.', opts:['good','better','best','well'], ans:2, hint:'Use superlative when comparing with all others.', exp:'Best is the superlative form of good.' },
        { q:'Identify the adjective: "He gave me some money."', opts:['gave','some','money','me'], ans:1, hint:'Look for the word that modifies the noun money.', exp:'Some is an adjective of quantity modifying money.' },
        { q:'Which sentence uses an adjective correctly?', opts:['She sings beautiful.','He is tall.','They run quick.','I feel nicely.'], ans:1, hint:'Adjectives describe nouns, not verbs.', exp:'He is tall — tall is an adjective after the linking verb is.' },
        { q:'The adjective form of "beauty" is:', opts:['beautifully','beautified','beautiful','beauties'], ans:2, hint:'Add -ful to the noun to form an adjective.', exp:'Beautiful is the adjective form of beauty.' },
        { q:'"Few students attended the class." — Few is a:', opts:['adjective of quality','adjective of quantity','demonstrative adjective','possessive adjective'], ans:1, hint:'It tells how many.', exp:'Few is an adjective of quantity telling how many students.' },
        { q:'Which is a possessive adjective?', opts:['mine','her','herself','who'], ans:1, hint:'Possessive adjectives precede nouns to show possession.', exp:'Her is a possessive adjective (e.g., her book).' },
      ]
    },
    {
      id:'adverbs', icon:'🚀', name:'Adverbs', level:'intermediate',
      desc:'Words that modify verbs, adjectives, or other adverbs.',
      lesson: {
        intro: 'An adverb modifies a verb, an adjective, or another adverb.',
        explanation: 'Adverbs can tell us how (manner), when (time), where (place), how much (degree), or how often (frequency) something happens.',
        examples: [
          'She sings <b>beautifully</b>. (manner)',
          'He arrived <b>yesterday</b>. (time)',
          'They searched <b>everywhere</b>. (place)',
          'It is <b>very</b> cold today. (degree)',
        ],
        tip: '💡 Tip: Most adverbs of manner are formed by adding -ly to an adjective.'
      },
      questions: [
        { q:'"She speaks very quickly." — The adverb of manner is:', opts:['She','very','quickly','speaks'], ans:2, hint:'The adverb of manner tells how she speaks.', exp:'Quickly is an adverb of manner telling how she speaks.' },
        { q:'Which is an adverb of frequency?', opts:['quickly','here','always','very'], ans:2, hint:'Frequency adverbs tell how often something happens.', exp:'Always is an adverb of frequency.' },
        { q:'The adverb form of "careful" is:', opts:['care','cares','carefully','carefulness'], ans:2, hint:'Add -ly to form the adverb.', exp:'Carefully is the adverb form of careful.' },
        { q:'"He studied hard." — Hard is an adverb of:', opts:['time','place','manner','degree'], ans:2, hint:'It tells how he studied.', exp:'Hard tells how he studied, making it an adverb of manner.' },
        { q:'Which adverb modifies an adjective?', opts:['run fast','very beautiful','go there','work hard'], ans:1, hint:'Look for the adverb before an adjective.', exp:'Very modifies the adjective beautiful.' },
        { q:'"I will call you tomorrow." — Tomorrow is an adverb of:', opts:['manner','frequency','time','place'], ans:2, hint:'It tells when the call will happen.', exp:'Tomorrow tells when, making it an adverb of time.' },
        { q:'Which sentence uses an adverb correctly?', opts:['She sings beautiful.','He runs fastly.','They work hard.','I feel goodly.'], ans:2, hint:'Hard is one of the adverbs that looks the same as its adjective.', exp:'They work hard — hard is the correct adverb form.' },
        { q:'"Do you come here often?" — Often is an adverb of:', opts:['place','time','frequency','manner'], ans:2, hint:'It tells how often you come.', exp:'Often is an adverb of frequency.' },
        { q:'The comparative form of "well" is:', opts:['weller','more well','better','gooder'], ans:2, hint:'Well has an irregular comparative form.', exp:'Better is the comparative adverb form of well.' },
        { q:'"She hardly studies." — Hardly means:', opts:['with effort','very hard','almost not at all','frequently'], ans:2, hint:'Hardly is not the adverb of hard; it means scarcely.', exp:'Hardly means almost not at all or scarcely.' },
      ]
    },
    {
      id:'articles', icon:'📌', name:'Articles', level:'beginner',
      desc:'The words a, an, and the — used before nouns.',
      lesson: {
        intro: 'Articles are words that define a noun as specific or unspecific.',
        explanation: '"The" is the definite article, used for specific nouns. "A" and "an" are indefinite articles used for non-specific nouns. Use "an" before vowel sounds.',
        examples: [
          'I saw <b>a</b> dog. (indefinite — any dog)',
          'I saw <b>the</b> dog. (definite — a specific dog)',
          'She is <b>an</b> engineer. (an before vowel sound)',
          '<b>The</b> sun rises in the east. (unique thing)',
        ],
        tip: '💡 Tip: Use "an" before words starting with a vowel sound (a, e, i, o, u), not just a vowel letter.'
      },
      questions: [
        { q:'Which article is used before "elephant"?', opts:['a','an','the','no article'], ans:1, hint:'Elephant starts with a vowel sound.', exp:'An is used before vowel sounds; elephant starts with the vowel e.' },
        { q:'"___ sun is a star." — Which article?', opts:['A','An','The','No article'], ans:2, hint:'There is only one sun — it is unique.', exp:'The is used for unique things like the sun.' },
        { q:'"She wants to be ___ doctor." — Fill in:', opts:['a','an','the','no article'], ans:0, hint:'Doctor starts with a consonant sound.', exp:'A is used before consonant sounds; doctor starts with d.' },
        { q:'When do we NOT use an article?', opts:['Before specific nouns','Before plural uncountable nouns','Before singular count nouns','Before proper names usually'], ans:3, hint:'Think about names of people, cities, countries.', exp:'We do not use articles before most proper names.' },
        { q:'"He is ___ honest man." — Fill in:', opts:['a','an','the','no article'], ans:1, hint:'Honest starts with a vowel sound (h is silent here).', exp:'An is used because honest is pronounced with a vowel sound.' },
        { q:'"___ gold is a precious metal." — Fill in:', opts:['A','An','The','No article'], ans:3, hint:'Uncountable nouns used in general sense do not need an article.', exp:'No article is needed for gold used in a general sense.' },
        { q:'Which sentence is correct?', opts:['She is a engineer.','He saw an cat.','They visited the Eiffel Tower.','I need a advice.'], ans:2, hint:'The Eiffel Tower is a specific, unique landmark.', exp:'The Eiffel Tower — the is used for unique, well-known landmarks.' },
        { q:'"___ Himalayas are the highest mountains." — Fill in:', opts:['A','An','The','No article'], ans:2, hint:'The is used before mountain ranges.', exp:'The Himalayas — the is used before plural proper nouns of mountain ranges.' },
        { q:'"I have ___ umbrella." — Fill in:', opts:['a','an','the','no article'], ans:1, hint:'Umbrella starts with the vowel sound u.', exp:'An is used before umbrella because it starts with a vowel sound.' },
        { q:'"She is ___ best student in class." — Fill in:', opts:['a','an','the','no article'], ans:2, hint:'Superlatives are used with the definite article.', exp:'The is used before superlatives like best.' },
      ]
    },
    {
      id:'prepositions', icon:'📍', name:'Prepositions', level:'intermediate',
      desc:'Words that show relationships between nouns and other words.',
      lesson: {
        intro: 'A preposition is a word that shows the relationship between a noun/pronoun and other words.',
        explanation: 'Prepositions can show time (at, in, on), place (at, in, on, under, behind), direction (to, from, into), cause (because of), and more.',
        examples: [
          'She sat <b>on</b> the chair. (place)',
          'They arrived <b>at</b> noon. (time)',
          'He walked <b>into</b> the room. (direction)',
          'I did it <b>for</b> you. (purpose)',
        ],
        tip: '💡 Tip: At, in, on are the most commonly confused prepositions. Use "in" for larger places/months, "on" for days/dates, "at" for specific times/places.'
      },
      questions: [
        { q:'"She woke up ___ 7 o\'clock." — Fill in:', opts:['in','on','at','by'], ans:2, hint:'Use this preposition for specific times.', exp:'At is used for specific times of the day.' },
        { q:'"He was born ___ Monday." — Fill in:', opts:['at','in','on','by'], ans:2, hint:'Use this preposition for days of the week.', exp:'On is used for days and dates.' },
        { q:'"I live ___ London." — Fill in:', opts:['at','on','in','by'], ans:2, hint:'Use this preposition for cities and countries.', exp:'In is used for cities, countries, and larger areas.' },
        { q:'"The cat is ___ the table." (below it) — Fill in:', opts:['on','over','under','above'], ans:2, hint:'This preposition means below.', exp:'Under means below; the cat is below the table.' },
        { q:'"She is afraid ___ dogs." — Fill in:', opts:['from','of','with','by'], ans:1, hint:'Afraid of is a fixed prepositional phrase.', exp:'Afraid of is the correct collocation.' },
        { q:'"He is good ___ mathematics." — Fill in:', opts:['in','at','on','for'], ans:1, hint:'Good at is the correct prepositional phrase for skills.', exp:'Good at is used for skills and subjects.' },
        { q:'"The movie starts ___ 8 PM." — Fill in:', opts:['in','on','at','by'], ans:2, hint:'Use this for specific times.', exp:'At is used for specific clock times.' },
        { q:'"They arrived ___ the airport." — Fill in:', opts:['in','on','at','by'], ans:2, hint:'Use this for specific locations like airports.', exp:'At is used for specific locations/points.' },
        { q:'"She has been studying ___ three hours." — Fill in:', opts:['since','for','from','by'], ans:1, hint:'This preposition indicates a duration of time.', exp:'For is used with a duration of time.' },
        { q:'"I have not seen him ___ Monday." — Fill in:', opts:['for','since','from','by'], ans:1, hint:'This preposition indicates a starting point in time.', exp:'Since is used from a specific point in time until now.' },
      ]
    },
    {
      id:'conjunctions', icon:'🔗', name:'Conjunctions', level:'intermediate',
      desc:'Words that connect clauses, sentences, or words.',
      lesson: {
        intro: 'A conjunction is a word that joins words, phrases, or clauses.',
        explanation: 'Coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so) join equal elements. Subordinating conjunctions (because, although, when) join a subordinate clause to a main clause.',
        examples: [
          'I like tea <b>and</b> coffee. (coordinating)',
          'She was tired, <b>but</b> she kept working. (coordinating)',
          '<b>Although</b> it was raining, they played outside. (subordinating)',
          'He left early <b>because</b> he was sick. (subordinating)',
        ],
        tip: '💡 Remember FANBOYS: For, And, Nor, But, Or, Yet, So — these are coordinating conjunctions.'
      },
      questions: [
        { q:'Which is a coordinating conjunction?', opts:['because','although','but','when'], ans:2, hint:'FANBOYS: For, And, Nor, But, Or, Yet, So.', exp:'But is a coordinating conjunction (part of FANBOYS).' },
        { q:'"She studied hard ___ she passed." — Fill in:', opts:['but','so','nor','yet'], ans:1, hint:'This shows a result or consequence.', exp:'So shows a result: she studied hard, so she passed.' },
        { q:'Which is a subordinating conjunction?', opts:['and','but','or','although'], ans:3, hint:'It introduces a subordinate clause.', exp:'Although is a subordinating conjunction introducing a contrast clause.' },
        { q:'"Neither he ___ she came." — Fill in:', opts:['or','nor','and','but'], ans:1, hint:'Neither is paired with this word.', exp:'Neither...nor is a correlative conjunction pair.' },
        { q:'"I will call you ___ I arrive." — Fill in:', opts:['since','when','but','and'], ans:1, hint:'This conjunction introduces a time clause.', exp:'When introduces a time clause.' },
        { q:'What type of conjunction is "because"?', opts:['coordinating','correlative','subordinating','conjunctive adverb'], ans:2, hint:'Because introduces a clause that explains why.', exp:'Because is a subordinating conjunction.' },
        { q:'"Both Tom ___ Jerry were there." — Fill in:', opts:['and','or','nor','but'], ans:0, hint:'Both is paired with this word.', exp:'Both...and is a correlative conjunction pair.' },
        { q:'"She is smart, ___ she is humble." — Fill in with a contrast:', opts:['and','so','yet','or'], ans:2, hint:'This word shows contrast like but.', exp:'Yet shows contrast similar to but.' },
        { q:'Which sentence uses a conjunction correctly?', opts:['He ran and jumped.','She neither happy or sad.','I want but juice.','They came so it rained.'], ans:0, hint:'Look for the correctly formed compound predicate.', exp:'He ran and jumped — and correctly joins two verb phrases.' },
        { q:'"___ it was hot, she wore a jacket." — Fill in:', opts:['Although','Because','So','And'], ans:0, hint:'This shows contrast between two situations.', exp:'Although shows contrast: it was hot, but she wore a jacket.' },
      ]
    },
    {
      id:'sva', icon:'⚖️', name:'Subject-Verb Agreement', level:'intermediate',
      desc:'Ensuring subjects and verbs agree in number.',
      lesson: {
        intro: 'Subject-verb agreement means the verb must match its subject in number (singular/plural).',
        explanation: 'Singular subjects take singular verbs; plural subjects take plural verbs. Special rules apply for collective nouns, indefinite pronouns, and compound subjects.',
        examples: [
          'She <b>runs</b> every day. (singular subject → singular verb)',
          'They <b>run</b> every day. (plural subject → plural verb)',
          'The team <b>is</b> winning. (collective noun — singular)',
          'Neither the cats nor the dog <b>is</b> hungry. (with neither/nor)',
        ],
        tip: '💡 Tip: Ignore phrases between subject and verb to find agreement.'
      },
      questions: [
        { q:'"Everyone ___ happy." — Fill in:', opts:['are','were','is','have'], ans:2, hint:'Everyone is an indefinite pronoun that takes a singular verb.', exp:'Everyone is treated as singular, so is is correct.' },
        { q:'"The news ___ shocking." — Fill in:', opts:['are','were','is','have'], ans:2, hint:'News looks plural but is singular.', exp:'News is a singular uncountable noun, so is is correct.' },
        { q:'"Neither the students nor the teacher ___ ready." — Fill in:', opts:['are','were','is','have'], ans:2, hint:'With neither/nor, the verb agrees with the nearest subject.', exp:'Teacher is singular and nearest to the verb, so is is correct.' },
        { q:'"Mathematics ___ my favorite subject." — Fill in:', opts:['are','were','is','have'], ans:2, hint:'Academic subjects ending in -s are singular.', exp:'Mathematics is singular despite ending in -s.' },
        { q:'"The herd of cattle ___ moving." — Fill in:', opts:['are','were','is','have'], ans:2, hint:'Herd is the subject, not cattle.', exp:'Herd is the subject (singular), so is is correct.' },
        { q:'"Both Tom and Jerry ___ here." — Fill in:', opts:['is','was','are','has'], ans:2, hint:'Both...and creates a plural subject.', exp:'Both Tom and Jerry is a plural compound subject, so are is correct.' },
        { q:'"Ten dollars ___ too much." — Fill in:', opts:['are','were','is','have'], ans:2, hint:'An amount of money is treated as singular.', exp:'Ten dollars as an amount is singular, so is is correct.' },
        { q:'"The committee ___ divided in their opinions." — Fill in:', opts:['is','was','are','has'], ans:2, hint:'When the committee members act individually, use plural.', exp:'Are is correct when the committee members act as individuals.' },
        { q:'"One of the students ___ absent." — Fill in:', opts:['are','were','is','have'], ans:2, hint:'The subject is one, not students.', exp:'One is the subject (singular), so is is correct.' },
        { q:'"She, along with her friends, ___ going." — Fill in:', opts:['are','were','is','have'], ans:2, hint:'The phrase along with does not make the subject plural.', exp:'She is the subject (singular); along with is a phrase, so is is correct.' },
      ]
    },
    {
      id:'interjections', icon:'😮', name:'Interjections', level:'beginner',
      desc:'Words or phrases that express strong emotion.',
      lesson: {
        intro: 'An interjection is a word or phrase that expresses sudden emotion.',
        explanation: 'Interjections can be followed by an exclamation mark (strong emotion) or a comma (mild emotion). They are grammatically independent of the rest of the sentence.',
        examples: [
          '<b>Wow!</b> That is amazing.',
          '<b>Oh,</b> I see what you mean.',
          '<b>Ouch!</b> That hurt.',
          '<b>Hurray!</b> We won the match!',
        ],
        tip: '💡 Tip: Strong interjections use an exclamation mark; mild ones use a comma.'
      },
      questions: [
        { q:'Which word is an interjection?', opts:['beautiful','quickly','Ouch','running'], ans:2, hint:'Interjections express sudden emotion.', exp:'Ouch is an interjection expressing pain.' },
        { q:'"___ We won the match!" — Fill in an interjection of joy:', opts:['Alas','Hurray','Oh','Ouch'], ans:1, hint:'This interjection expresses joy or celebration.', exp:'Hurray is an interjection of joy.' },
        { q:'What punctuation usually follows a strong interjection?', opts:['Period','Comma','Exclamation mark','Question mark'], ans:2, hint:'Strong emotions are usually followed by this mark.', exp:'A strong interjection is followed by an exclamation mark (!).' },
        { q:'"Alas! He is gone." — Alas expresses:', opts:['joy','surprise','sorrow','anger'], ans:2, hint:'Alas is used in situations of grief.', exp:'Alas expresses sorrow or regret.' },
        { q:'Which is an interjection of surprise?', opts:['Hurray','Wow','Ouch','Alas'], ans:1, hint:'This is used when something is impressive or unexpected.', exp:'Wow is an interjection of surprise or admiration.' },
        { q:'"Oh, I did not expect that." — Oh expresses:', opts:['strong pain','mild surprise','great joy','deep sorrow'], ans:1, hint:'The comma after Oh suggests mild emotion.', exp:'Oh with a comma expresses mild surprise or realization.' },
        { q:'Interjections are grammatically ___ of the rest of the sentence.', opts:['dependent','connected','independent','a part'], ans:2, hint:'They stand alone emotionally.', exp:'Interjections are grammatically independent.' },
        { q:'"Bravo! Excellent performance!" — Bravo expresses:', opts:['sorrow','approval/praise','pain','surprise'], ans:1, hint:'Bravo is used to praise someone.', exp:'Bravo is an interjection expressing approval or praise.' },
        { q:'Which sentence uses an interjection correctly?', opts:['Ouch I fell.','Wow, that is beautiful!','Hurray is happy.','Alas is sad.'], ans:1, hint:'Look for the correct punctuation.', exp:'Wow, that is beautiful! — correctly uses an interjection with a comma.' },
        { q:'"___ I\'ve lost my keys!" — Fill in an interjection of distress:', opts:['Hurray','Wow','Oh no','Bravo'], ans:2, hint:'This expresses alarm or distress.', exp:'Oh no expresses distress or alarm.' },
      ]
    },
  ],

  /* ── TENSES ───────────────────────────────────────────── */
  tenses: [
    {
      id:'simple-present', icon:'🌅', name:'Simple Present',
      example:'She reads every day.',
      formula: 'Subject + V1 (+ s/es for he/she/it)',
      questions: [
        { q:'He ___ to school every day.', opts:['go','goes','went','going'], ans:1, hint:'Use base form + s for he/she/it.', exp:'Goes is the third-person singular form.' },
        { q:'They ___ football on weekends.', opts:['plays','playing','play','played'], ans:2, hint:'They is a plural subject.', exp:'Play is used with plural subjects.' },
        { q:'She ___ English fluently.', opts:['speak','spoke','spoken','speaks'], ans:3, hint:'Add -s for she.', exp:'Speaks is the third-person singular form.' },
        { q:'Water ___ at 100°C.', opts:['boil','boils','boiled','boiling'], ans:1, hint:'Scientific facts use simple present.', exp:'Boils — simple present for scientific facts.' },
        { q:'I ___ coffee every morning.', opts:['drinks','drunk','drink','drank'], ans:2, hint:'I takes the base form of the verb.', exp:'Drink is the base form used with I.' },
      ]
    },
    {
      id:'present-continuous', icon:'▶️', name:'Present Continuous',
      example:'She is reading now.',
      formula: 'Subject + is/am/are + V-ing',
      questions: [
        { q:'She ___ a book right now.', opts:['reads','read','is reading','has read'], ans:2, hint:'Right now indicates present continuous.', exp:'Is reading — present continuous for actions happening now.' },
        { q:'They ___ football at the moment.', opts:['plays','are playing','played','have played'], ans:1, hint:'They + are + V-ing.', exp:'Are playing is the present continuous form for they.' },
        { q:'"Look! The birds ___." — Fill in:', opts:['fly','flew','are flying','have flown'], ans:2, hint:'Look! signals something happening right now.', exp:'Are flying — present continuous for an action currently in progress.' },
        { q:'He ___ his homework now.', opts:['does','did','is doing','has done'], ans:2, hint:'Now signals present continuous.', exp:'Is doing is the present continuous form for he.' },
        { q:'I ___ to music at this moment.', opts:['listen','listened','am listening','have listened'], ans:2, hint:'At this moment = present continuous.', exp:'Am listening — I + am + V-ing.' },
      ]
    },
    {
      id:'present-perfect', icon:'✅', name:'Present Perfect',
      example:'She has read the book.',
      formula: 'Subject + has/have + V3 (past participle)',
      questions: [
        { q:'She ___ the report already.', opts:['finish','finished','has finished','is finishing'], ans:2, hint:'Already often signals present perfect.', exp:'Has finished — present perfect with has for she.' },
        { q:'They ___ Paris twice.', opts:['visited','visit','have visited','are visiting'], ans:2, hint:'Twice indicates experience — use present perfect.', exp:'Have visited — present perfect for repeated experiences.' },
        { q:'I ___ never seen snow.', opts:['have','has','had','am'], ans:0, hint:'I uses have in present perfect.', exp:'Have never seen — present perfect with I + have.' },
        { q:'He ___ just left the office.', opts:['is','was','has','have'], ans:2, hint:'Just often signals present perfect.', exp:'Has just left — present perfect with he + has.' },
        { q:'We ___ known each other for 10 years.', opts:['know','knew','have known','are knowing'], ans:2, hint:'For with a duration uses present perfect.', exp:'Have known — present perfect for a duration continuing to present.' },
      ]
    },
    {
      id:'present-perfect-continuous', icon:'🔄', name:'Present Perfect Continuous',
      example:'She has been reading for an hour.',
      formula: 'Subject + has/have + been + V-ing',
      questions: [
        { q:'He ___ for three hours.', opts:['studies','studied','has been studying','is studying'], ans:2, hint:'For + duration → present perfect continuous.', exp:'Has been studying — present perfect continuous for a duration.' },
        { q:'They ___ since morning.', opts:['work','worked','have been working','are working'], ans:2, hint:'Since + time point → present perfect continuous.', exp:'Have been working — present perfect continuous with since.' },
        { q:'She ___ all day.', opts:['cook','cooked','has been cooking','is cooking'], ans:2, hint:'All day indicates a duration.', exp:'Has been cooking — present perfect continuous.' },
        { q:'I ___ here for two years.', opts:['live','lived','have been living','am living'], ans:2, hint:'For two years indicates a continuing action.', exp:'Have been living — present perfect continuous.' },
        { q:'We ___ this problem for weeks.', opts:['discuss','discussed','have been discussing','are discussing'], ans:2, hint:'For weeks signals a duration.', exp:'Have been discussing — present perfect continuous.' },
      ]
    },
    {
      id:'simple-past', icon:'⏮️', name:'Simple Past',
      example:'She read the book yesterday.',
      formula: 'Subject + V2 (past form)',
      questions: [
        { q:'She ___ to the market yesterday.', opts:['go','goes','went','has gone'], ans:2, hint:'Yesterday indicates simple past.', exp:'Went — simple past of go, used with yesterday.' },
        { q:'They ___ a movie last night.', opts:['watch','watches','watched','are watching'], ans:2, hint:'Last night is a past time signal.', exp:'Watched — simple past form.' },
        { q:'He ___ the window by accident.', opts:['break','breaks','broke','has broken'], ans:2, hint:'Broke is the past form of break.', exp:'Broke is the irregular simple past of break.' },
        { q:'I ___ very tired after the run.', opts:['am','is','was','were'], ans:2, hint:'I + was for past tense of be.', exp:'Was — simple past of am/is for singular I.' },
        { q:'We ___ dinner at 7 PM.', opts:['eat','ate','eaten','have eaten'], ans:1, hint:'At 7 PM is a specific past time.', exp:'Ate — simple past of eat.' },
      ]
    },
    {
      id:'past-continuous', icon:'🔁', name:'Past Continuous',
      example:'She was reading when I called.',
      formula: 'Subject + was/were + V-ing',
      questions: [
        { q:'She ___ when I arrived.', opts:['sleeps','slept','was sleeping','has slept'], ans:2, hint:'An ongoing past action interrupted by another.', exp:'Was sleeping — past continuous for an ongoing action.' },
        { q:'They ___ at 9 PM last night.', opts:['study','studied','were studying','have studied'], ans:2, hint:'At a specific time in the past signals past continuous.', exp:'Were studying — past continuous for they.' },
        { q:'I ___ TV when the phone rang.', opts:['watch','watched','was watching','have watched'], ans:2, hint:'When signals an interruption.', exp:'Was watching — past continuous for the ongoing background action.' },
        { q:'He ___ while she was cooking.', opts:['reads','read','was reading','has read'], ans:2, hint:'While signals two simultaneous past actions.', exp:'Was reading — past continuous for simultaneous past action.' },
        { q:'The children ___ in the park all afternoon.', opts:['play','played','were playing','have played'], ans:2, hint:'All afternoon indicates a duration in the past.', exp:'Were playing — past continuous for extended past activity.' },
      ]
    },
    {
      id:'past-perfect', icon:'⏩', name:'Past Perfect',
      example:'She had read the book before I came.',
      formula: 'Subject + had + V3',
      questions: [
        { q:'By the time I arrived, she ___ already left.', opts:['has','have','had','was'], ans:2, hint:'By the time signals past perfect for the earlier action.', exp:'Had already left — past perfect for an action before another past action.' },
        { q:'He ___ the report before the meeting.', opts:['finish','finished','had finished','has finished'], ans:2, hint:'Before + past action → past perfect.', exp:'Had finished — past perfect.' },
        { q:'They said they ___ the movie before.', opts:['see','saw','have seen','had seen'], ans:3, hint:'Reported speech + earlier action → past perfect.', exp:'Had seen — past perfect for an action before another past event.' },
        { q:'She ___ hard before the exam.', opts:['study','studied','had studied','has studied'], ans:2, hint:'Before the exam signals past perfect.', exp:'Had studied — past perfect for prior preparation.' },
        { q:'I ___ never visited Paris before that trip.', opts:['have','has','had','am'], ans:2, hint:'Before that trip signals past perfect.', exp:'Had never visited — past perfect.' },
      ]
    },
    {
      id:'past-perfect-continuous', icon:'⏪', name:'Past Perfect Continuous',
      example:'She had been reading for an hour when I called.',
      formula: 'Subject + had been + V-ing',
      questions: [
        { q:'She ___ for two hours before the doctor came.', opts:['waits','waited','had been waiting','was waiting'], ans:2, hint:'Before + past event → past perfect continuous for duration.', exp:'Had been waiting — past perfect continuous for duration before a past event.' },
        { q:'He ___ for hours before he found his keys.', opts:['searches','searched','had been searching','was searching'], ans:2, hint:'For hours before = past perfect continuous.', exp:'Had been searching — past perfect continuous.' },
        { q:'They ___ all night before they finished.', opts:['work','worked','had been working','were working'], ans:2, hint:'All night before = duration → past perfect continuous.', exp:'Had been working — past perfect continuous.' },
        { q:'I ___ to tell him for days.', opts:['try','tried','had been trying','was trying'], ans:2, hint:'For days before → past perfect continuous.', exp:'Had been trying — past perfect continuous.' },
        { q:'We ___ the topic for a long time before understanding it.', opts:['study','studied','had been studying','were studying'], ans:2, hint:'For a long time before = past perfect continuous.', exp:'Had been studying — past perfect continuous.' },
      ]
    },
    {
      id:'simple-future', icon:'🔮', name:'Simple Future',
      example:'She will read the book tomorrow.',
      formula: 'Subject + will + V1',
      questions: [
        { q:'She ___ the project by tomorrow.', opts:['finish','finishes','will finish','is finishing'], ans:2, hint:'By tomorrow signals future.', exp:'Will finish — simple future.' },
        { q:'They ___ to Paris next week.', opts:['travel','travelled','will travel','are travelling'], ans:2, hint:'Next week = future time.', exp:'Will travel — simple future.' },
        { q:'I promise I ___ on time.', opts:['come','came','will come','am coming'], ans:2, hint:'I promise + future commitment → will.', exp:'Will come — simple future for a promise.' },
        { q:'He ___ the doctor tomorrow.', opts:['see','saw','will see','is seeing'], ans:2, hint:'Tomorrow signals future.', exp:'Will see — simple future.' },
        { q:'"The train ___ at 5 PM." — Use simple future.', opts:['arrive','arrived','will arrive','is arriving'], ans:2, hint:'Simple future states a future fact.', exp:'Will arrive — simple future.' },
      ]
    },
    {
      id:'future-continuous', icon:'🌊', name:'Future Continuous',
      example:'She will be reading at 8 PM tomorrow.',
      formula: 'Subject + will be + V-ing',
      questions: [
        { q:'At this time tomorrow, she ___ her exam.', opts:['takes','took','will be taking','will take'], ans:2, hint:'At this time tomorrow signals future continuous.', exp:'Will be taking — future continuous for an ongoing future action.' },
        { q:'They ___ the game when you arrive.', opts:['watch','watched','will be watching','will watch'], ans:2, hint:'When you arrive signals ongoing future action.', exp:'Will be watching — future continuous.' },
        { q:'I ___ in the library at 7 PM tonight.', opts:['study','studied','will be studying','will study'], ans:2, hint:'At 7 PM tonight = ongoing future action.', exp:'Will be studying — future continuous.' },
        { q:'He ___ when we get home.', opts:['sleeps','slept','will be sleeping','will sleep'], ans:2, hint:'When we get home → ongoing future action.', exp:'Will be sleeping — future continuous.' },
        { q:'We ___ all day on Saturday.', opts:['travel','travelled','will be travelling','will travel'], ans:2, hint:'All day signals a continuous future action.', exp:'Will be travelling — future continuous.' },
      ]
    },
    {
      id:'future-perfect', icon:'🏁', name:'Future Perfect',
      example:'She will have read the book by then.',
      formula: 'Subject + will have + V3',
      questions: [
        { q:'By next year, she ___ her degree.', opts:['finish','finishes','will have finished','will finish'], ans:2, hint:'By next year signals future perfect.', exp:'Will have finished — future perfect for completion before a future time.' },
        { q:'They ___ the project before the deadline.', opts:['complete','completed','will have completed','will complete'], ans:2, hint:'Before the deadline → future perfect.', exp:'Will have completed — future perfect.' },
        { q:'I ___ 1000 books by age 30.', opts:['read','reads','will have read','will read'], ans:2, hint:'By age 30 = future perfect.', exp:'Will have read — future perfect.' },
        { q:'He ___ dinner before you arrive.', opts:['cook','cooked','will have cooked','will cook'], ans:2, hint:'Before you arrive → future perfect.', exp:'Will have cooked — future perfect.' },
        { q:'We ___ this town for 20 years by next January.', opts:['leave','left','will have left','will leave'], ans:2, hint:'By next January = future perfect.', exp:'Will have left — future perfect.' },
      ]
    },
    {
      id:'future-perfect-continuous', icon:'♾️', name:'Future Perfect Continuous',
      example:'By 2030, she will have been studying for 10 years.',
      formula: 'Subject + will have been + V-ing',
      questions: [
        { q:'By next month, she ___ here for a year.', opts:['works','worked','will have been working','will work'], ans:2, hint:'By next month + for a year → future perfect continuous.', exp:'Will have been working — future perfect continuous.' },
        { q:'By 2030, I ___ English for 20 years.', opts:['teach','taught','will have been teaching','will teach'], ans:2, hint:'By 2030 + for 20 years → future perfect continuous.', exp:'Will have been teaching — future perfect continuous.' },
        { q:'By the time you arrive, they ___ for two hours.', opts:['wait','waited','will have been waiting','will wait'], ans:2, hint:'By the time + for two hours → future perfect continuous.', exp:'Will have been waiting — future perfect continuous.' },
        { q:'He ___ for a decade by his retirement.', opts:['works','worked','will have been working','will work'], ans:2, hint:'By his retirement + a decade → future perfect continuous.', exp:'Will have been working — future perfect continuous.' },
        { q:'We ___ on this project for 3 years by completion.', opts:['work','worked','will have been working','will work'], ans:2, hint:'By completion + 3 years → future perfect continuous.', exp:'Will have been working — future perfect continuous.' },
      ]
    },
  ],

  /* ── VOCABULARY ───────────────────────────────────────── */
  vocabulary: [
    { word:'Abundant', pos:'adj', definition:'Present in great quantities; more than enough.', example:'The forest had an abundant supply of fresh water.' },
    { word:'Benevolent', pos:'adj', definition:'Well-meaning and kindly; charitable.', example:'The benevolent teacher stayed after school to help students.' },
    { word:'Candid', pos:'adj', definition:'Truthful and straightforward; frank.', example:'She gave a candid opinion about the proposal.' },
    { word:'Diligent', pos:'adj', definition:'Showing care and effort in work.', example:'A diligent student always reviews notes after class.' },
    { word:'Eloquent', pos:'adj', definition:'Fluent and persuasive in speaking or writing.', example:'The eloquent speaker held the audience\'s attention throughout.' },
    { word:'Fervent', pos:'adj', definition:'Having or displaying intense and passionate feeling.', example:'She was a fervent supporter of environmental causes.' },
    { word:'Gratitude', pos:'noun', definition:'The quality of being thankful; appreciation.', example:'She expressed gratitude for the warm welcome.' },
    { word:'Humble', pos:'adj', definition:'Having a modest opinion of oneself; not arrogant.', example:'Despite his success, he remained humble and kind.' },
    { word:'Innovative', pos:'adj', definition:'Introducing new ideas; original and creative.', example:'The company launched an innovative product that changed the market.' },
    { word:'Jubilant', pos:'adj', definition:'Feeling or expressing great happiness.', example:'The crowd was jubilant after the team won the championship.' },
    { word:'Keen', pos:'adj', definition:'Having or showing eagerness or enthusiasm.', example:'She was keen to learn everything about photography.' },
    { word:'Luminous', pos:'adj', definition:'Emitting or reflecting light; bright and shining.', example:'The luminous moon lit up the night sky.' },
    { word:'Meticulous', pos:'adj', definition:'Showing great attention to detail; very careful.', example:'He was meticulous in checking every detail of the report.' },
    { word:'Nonchalant', pos:'adj', definition:'Appearing casually calm; not anxious.', example:'She answered the tough question with a nonchalant shrug.' },
    { word:'Optimistic', pos:'adj', definition:'Hopeful and confident about the future.', example:'She remained optimistic even during difficult times.' },
    { word:'Perseverance', pos:'noun', definition:'Continued effort despite difficulty or delay.', example:'Her perseverance helped her overcome every obstacle.' },
    { word:'Resilient', pos:'adj', definition:'Able to recover quickly from difficulties.', example:'Children are remarkably resilient after setbacks.' },
    { word:'Serene', pos:'adj', definition:'Calm, peaceful, and untroubled.', example:'The serene lake reflected the mountains beautifully.' },
    { word:'Tenacious', pos:'adj', definition:'Holding firmly to a purpose; persistent.', example:'She was tenacious in her pursuit of excellence.' },
    { word:'Vivid', pos:'adj', definition:'Producing powerful feelings; intensely deep.', example:'He had vivid memories of his childhood in the countryside.' },
    { word:'Articulate', pos:'adj', definition:'Able to express thoughts clearly and effectively.', example:'The articulate presenter explained the complex topic simply.' },
    { word:'Brevity', pos:'noun', definition:'Concise and exact use of words; shortness.', example:'The report was praised for its brevity and clarity.' },
    { word:'Concise', pos:'adj', definition:'Giving much information clearly in few words.', example:'Her concise explanation saved everyone time.' },
    { word:'Discern', pos:'verb', definition:'To recognize or find out.', example:'She could discern the difference between the two paintings.' },
    { word:'Empathy', pos:'noun', definition:'The ability to understand and share the feelings of another.', example:'A good leader shows empathy toward team members.' },
    { word:'Frugal', pos:'adj', definition:'Sparing or economical with money or food.', example:'He was frugal and saved a lot for the future.' },
    { word:'Gallant', pos:'adj', definition:'Brave, heroic, or chivalrous.', example:'The gallant firefighter saved the child from the burning building.' },
    { word:'Harmonious', pos:'adj', definition:'Free from conflict; forming a pleasing whole.', example:'The team worked in a harmonious environment.' },
    { word:'Immaculate', pos:'adj', definition:'Perfectly clean, neat, or tidy; flawless.', example:'Her work was absolutely immaculate and error-free.' },
    { word:'Jovial', pos:'adj', definition:'Cheerful and friendly; good-humored.', example:'The jovial host made every guest feel welcome.' },
  ],

  /* ── READING PASSAGES ─────────────────────────────────── */
  passages: [
    {
      id:'p1', title:'The Benefits of Reading', level:'beginner', topic:'culture',
      readTime:'3 min', words:'220',
      preview:'Reading is one of the most beneficial activities a person can engage in...',
      text: `Reading is one of the most beneficial activities a person can engage in. It improves vocabulary, enhances concentration, and stimulates the mind. Whether you prefer fiction or non-fiction, books provide a wealth of knowledge and entertainment.

Regular reading can reduce stress by as much as 68%, according to studies. When you read, your mind enters a state of focused relaxation, similar to meditation. This mental escape helps lower heart rate and ease muscle tension.

Books also help develop empathy. When you read about different characters and their experiences, you begin to understand perspectives different from your own. This emotional intelligence is valuable in everyday relationships.

Additionally, reading before bed can improve sleep quality. Unlike screens that emit blue light, a physical book or e-reader without blue light helps signal to your brain that it is time to rest.

Start with just 20 minutes of reading a day and gradually increase the time. You will notice improvements in language skills, critical thinking, and overall well-being.`,
      questions: [
        { q:'According to the passage, reading can reduce stress by:', opts:['38%','58%','68%','78%'], ans:2 },
        { q:'Reading before bed helps because:', opts:['Books are heavy','It stimulates the mind','Books don\'t emit blue light','It makes you tired'], ans:2 },
        { q:'Which of the following is NOT mentioned as a benefit of reading?', opts:['Improved vocabulary','Better concentration','Physical fitness','Stress reduction'], ans:2 },
      ]
    },
    {
      id:'p2', title:'Climate Change and Our Future', level:'intermediate', topic:'science',
      readTime:'5 min', words:'380',
      preview:'Climate change is one of the most pressing challenges facing our planet today...',
      text: `Climate change is one of the most pressing challenges facing our planet today. The Earth's average temperature has risen by about 1.1 degrees Celsius since the pre-industrial era, primarily due to the burning of fossil fuels, deforestation, and industrial activities.

The consequences are far-reaching. Glaciers are melting at alarming rates, contributing to rising sea levels. Extreme weather events — hurricanes, droughts, floods — are becoming more frequent and intense. Biodiversity is threatened as species struggle to adapt to rapidly changing conditions.

Scientists agree that urgent action is needed. The Paris Agreement of 2015 united countries in a commitment to limit global warming to 1.5 to 2 degrees Celsius above pre-industrial levels. Countries pledged to reduce greenhouse gas emissions and transition to renewable energy sources.

Renewable energy — solar, wind, and hydro — offers a sustainable path forward. Electric vehicles are replacing fossil-fuel-powered cars. Sustainable agriculture practices are being adopted to reduce the carbon footprint of food production.

Individual actions also matter. Reducing energy consumption, eating less meat, using public transportation, and supporting eco-friendly businesses all contribute to a collective solution.

Climate change is a global problem that requires a global response. By working together — governments, businesses, and individuals — we can safeguard our planet for future generations.`,
      questions: [
        { q:'By how much has Earth\'s temperature risen since the pre-industrial era?', opts:['0.5°C','1.1°C','1.5°C','2°C'], ans:1 },
        { q:'The Paris Agreement aims to limit warming to:', opts:['1°C','1.5–2°C','2–2.5°C','3°C'], ans:1 },
        { q:'Which of the following is mentioned as a renewable energy source?', opts:['Coal','Natural gas','Solar','Nuclear'], ans:2 },
      ]
    },
    {
      id:'p3', title:'The Art of Effective Communication', level:'advanced', topic:'business',
      readTime:'6 min', words:'450',
      preview:'Effective communication is the cornerstone of personal and professional success...',
      text: `Effective communication is the cornerstone of personal and professional success. It is not merely the transfer of information but the creation of shared understanding. Leaders who communicate effectively inspire trust, drive performance, and build cohesive teams.

At its core, communication involves a sender, a message, a medium, and a receiver. However, the complexity lies in the interpretation. The same message can be received differently depending on tone, context, cultural background, and the emotional state of the listener.

Active listening is one of the most undervalued communication skills. True listening means giving full attention, acknowledging feelings, asking clarifying questions, and resisting the urge to formulate a response while the other person is still speaking.

Non-verbal communication accounts for a significant portion of our messaging. Studies suggest that body language, facial expressions, and tone of voice carry more weight than words alone. Maintaining appropriate eye contact, an open posture, and a calm demeanor reinforces the verbal message.

Written communication demands clarity and brevity. In the professional world, emails and reports should be structured logically, free of jargon, and tailored to the audience. The ability to convey complex ideas simply is a highly prized skill.

Cross-cultural communication is increasingly important in our globalised world. Awareness of cultural differences in directness, hierarchy, and non-verbal cues prevents misunderstandings and builds international partnerships.

Investing in communication skills — through practice, feedback, and continuous learning — yields dividends in every sphere of life.`,
      questions: [
        { q:'According to the passage, true listening involves:', opts:['Waiting for your turn to speak','Formulating responses quickly','Giving full attention and asking clarifying questions','Avoiding eye contact'], ans:2 },
        { q:'Non-verbal communication includes all of the following EXCEPT:', opts:['Body language','Tone of voice','Word choice','Facial expressions'], ans:2 },
        { q:'The passage describes effective written communication as:', opts:['Complex and detailed','Jargon-rich','Clear, brief, and audience-tailored','Informal and creative'], ans:2 },
      ]
    },
    {
      id:'p4', title:'The Amazon Rainforest', level:'intermediate', topic:'nature',
      readTime:'4 min', words:'300',
      preview:'The Amazon rainforest is the world\'s largest tropical rainforest...',
      text: `The Amazon rainforest is the world's largest tropical rainforest, covering approximately 5.5 million square kilometers across nine countries in South America. It is home to an astonishing diversity of life: over 40,000 plant species, 1,300 bird species, 3,000 types of fish, and millions of insect species.

Often called the "lungs of the Earth," the Amazon produces about 20% of the world's oxygen and absorbs vast amounts of carbon dioxide, making it critical in the fight against climate change. The forest also regulates regional and global weather patterns.

Indigenous communities have lived in harmony with the Amazon for thousands of years, relying on its biodiversity for food, medicine, and spiritual practices. Approximately 400 distinct indigenous groups call the forest home.

However, the Amazon is under severe threat. Deforestation driven by cattle ranching, agriculture, logging, and mining has destroyed vast swaths of the forest. Between 2000 and 2020, the Amazon lost approximately 400,000 square kilometers of forest.

Conservation efforts are underway. Brazil, which contains the largest portion of the Amazon, has established protected areas and indigenous territories. International agreements and funding help support local conservation programs.

Protecting the Amazon is not just an environmental imperative — it is a social and cultural one as well.`,
      questions: [
        { q:'The Amazon rainforest covers approximately how many square kilometers?', opts:['3.5 million','4.5 million','5.5 million','6.5 million'], ans:2 },
        { q:'What percentage of the world\'s oxygen does the Amazon produce?', opts:['10%','15%','20%','25%'], ans:2 },
        { q:'Approximately how many indigenous groups live in the Amazon?', opts:['200','300','400','500'], ans:2 },
      ]
    },
  ],

  /* ── WRITING PROMPTS ──────────────────────────────────── */
  writingPrompts: [
    { type:'narrative', prompt:'Write about a time when you overcame a great challenge. Describe the situation, how you felt, and what you learned from the experience.', minWords:150 },
    { type:'argumentative', prompt:'Some people believe that social media does more harm than good. Do you agree or disagree? Support your opinion with reasons and examples.', minWords:200 },
    { type:'descriptive', prompt:'Describe your ideal city of the future. What technologies, social systems, and environmental features would it have?', minWords:150 },
    { type:'letter', prompt:'Write a formal letter to your local government requesting the construction of a public library in your neighborhood.', minWords:180 },
    { type:'narrative', prompt:'Write a short story about a person who discovers a mysterious door in their house that leads to an unexpected place.', minWords:200 },
    { type:'argumentative', prompt:'Should schools teach financial literacy as a compulsory subject? Discuss with arguments for and against.', minWords:200 },
    { type:'descriptive', prompt:'Describe the most beautiful natural place you have ever visited or imagined. Use vivid sensory details.', minWords:150 },
    { type:'email', prompt:'Write a professional email to your boss requesting a day off for a family commitment. Be polite and clear.', minWords:100 },
  ],

  /* ── SPEAKING SCENARIOS ────────────────────────────────── */
  speakingScenarios: [
    { title:'At the Airport', icon:'✈️', scenario:'You have just arrived at a busy international airport. Describe what you see, hear, and feel. Talk about the security process, your gate, and how you spend your waiting time.' },
    { title:'Job Interview', icon:'💼', scenario:'You are in a job interview for your dream position. Answer the question: "Tell me about yourself and why you are the best candidate for this role."' },
    { title:'Neighborhood Problem', icon:'🏘️', scenario:'There is a problem in your neighborhood (e.g., a damaged road, lack of lighting). Describe the problem and propose a solution to your local council.' },
    { title:'Describing Your Hometown', icon:'🏡', scenario:'Describe your hometown to a foreign visitor. Include details about the geography, culture, food, and what makes it unique.' },
    { title:'Talking About Your Hobby', icon:'🎨', scenario:'Describe your favorite hobby in detail. Why do you enjoy it? How did you start? What have you learned from it?' },
    { title:'Giving Directions', icon:'🗺️', scenario:'A tourist asks you for directions to the nearest museum. Give clear, step-by-step directions from your current location.' },
    { title:'Discussing a News Story', icon:'📰', scenario:'You have just read an interesting news article. Summarize the story and share your opinion about it.' },
    { title:'Making Recommendations', icon:'⭐', scenario:'A friend is visiting your city for the first time. Recommend three things they must see, eat, or do. Explain why each one is special.' },
  ],

  /* ── PRONUNCIATION ────────────────────────────────────── */
  pronunciationItems: [
    { title:'Minimal Pairs: Ship vs. Sheep', icon:'🚢', words:['ship /ʃɪp/','sheep /ʃiːp/','sit /sɪt/','seat /siːt/','bit /bɪt/','beat /biːt/'], desc:'Practice distinguishing short /ɪ/ from long /iː/ vowel sounds.' },
    { title:'Silent Letters', icon:'🤫', words:['knife (k silent)','write (w silent)','gnome (g silent)','honest (h silent)','lamb (b silent)'], desc:'Many English words have letters that are written but not pronounced.' },
    { title:'Vowel Sounds: A', icon:'🔤', words:['cat /æ/','care /eɪ/','car /ɑː/','all /ɔː/','about /ə/'], desc:'The letter A has many different pronunciations in English.' },
    { title:'Word Stress: Two-syllable Words', icon:'💥', words:['PROtest (noun)','proTEST (verb)','REcord (noun)','reCORD (verb)','PERmit (noun)','perMIT (verb)'], desc:'In two-syllable words, stress changes meaning between noun and verb.' },
    { title:'Difficult Consonants: TH', icon:'👅', words:['think /θɪŋk/','this /ðɪs/','three /θriː/','though /ðoʊ/','thanks /θæŋks/'], desc:'English has two TH sounds: voiceless /θ/ and voiced /ð/.' },
    { title:'Linking Sounds', icon:'🔗', words:['an apple = "an-napple"','in a = "in-na"','go out = "gou-wout"','she asked = "she-yasked"'], desc:'In natural speech, words are linked together smoothly.' },
  ],

  /* ── LISTENING EXERCISES ──────────────────────────────── */
  listeningExercises: [
    { title:'Weather Forecast', icon:'🌤️', level:'beginner', text:'Good morning! Here is today\'s weather forecast. In the morning, expect sunny skies with temperatures around 22 degrees Celsius. By afternoon, clouds will move in from the west, and there is a 40% chance of light rain in the evening. Winds will be gentle, around 10 kilometers per hour. A lovely start to the day, but carry an umbrella just in case!', questions:[
      {q:'What will the morning weather be like?', opts:['Rainy','Cloudy','Sunny','Stormy'], ans:2},
      {q:'What percentage chance of rain is forecast for the evening?', opts:['20%','30%','40%','50%'], ans:2},
    ]},
    { title:'Restaurant Conversation', icon:'🍽️', level:'beginner', text:'Waiter: Good evening! Welcome to Bella Italia. Do you have a reservation? Guest: Yes, a table for two under the name Johnson. Waiter: Perfect, right this way. Here are your menus. Can I start you off with some drinks? Guest: Yes, we\'ll have two sparkling waters and a glass of the house red wine, please. Waiter: Excellent choice! I\'ll be right back.', questions:[
      {q:'How many people are dining?', opts:['One','Two','Three','Four'], ans:1},
      {q:'What wine does the guest order?', opts:['White wine','Rosé','House red wine','Champagne'], ans:2},
    ]},
    { title:'University Lecture: Renewable Energy', icon:'⚡', level:'intermediate', text:'Today we will look at the three primary sources of renewable energy: solar, wind, and hydroelectric power. Solar energy harnesses sunlight using photovoltaic cells. Wind energy uses turbines to convert wind movement into electricity. Hydroelectric power generates electricity from the movement of water, typically through dams. Each source has its advantages and limitations depending on geography and climate.', questions:[
      {q:'Which of the following is NOT mentioned as a renewable source?', opts:['Solar','Wind','Nuclear','Hydroelectric'], ans:2},
      {q:'What do photovoltaic cells harness?', opts:['Wind','Water','Sunlight','Heat'], ans:2},
    ]},
  ],

  /* ── ACHIEVEMENTS ─────────────────────────────────────── */
  achievements: [
    { id:'first-question', icon:'🌟', name:'First Step', desc:'Answer your first question.', xpRequired:1 },
    { id:'ten-correct', icon:'✅', name:'Quick Learner', desc:'Get 10 questions correct.', xpRequired:100 },
    { id:'streak-3', icon:'🔥', name:'On Fire!', desc:'Maintain a 3-day streak.', xpRequired:0, streakRequired:3 },
    { id:'grammar-start', icon:'📖', name:'Grammar Guru Jr.', desc:'Complete your first grammar topic.', xpRequired:50 },
    { id:'vocab-10', icon:'🔤', name:'Word Collector', desc:'Study 10 vocabulary words.', xpRequired:0, wordsRequired:10 },
    { id:'xp-500', icon:'⚡', name:'XP Master I', desc:'Earn 500 XP.', xpRequired:500 },
    { id:'xp-1000', icon:'💎', name:'XP Master II', desc:'Earn 1000 XP.', xpRequired:1000 },
    { id:'streak-7', icon:'🌋', name:'Unstoppable!', desc:'Maintain a 7-day streak.', xpRequired:0, streakRequired:7 },
    { id:'perfect-quiz', icon:'🎯', name:'Perfect Score', desc:'Get 100% in a quiz.', xpRequired:0, perfectRequired:true },
    { id:'reading-1', icon:'📰', name:'Avid Reader', desc:'Complete your first reading passage.', xpRequired:0 },
    { id:'all-tenses', icon:'⏱️', name:'Tense Titan', desc:'Practice all 12 tenses.', xpRequired:0 },
    { id:'xp-5000', icon:'🏆', name:'English Champion', desc:'Earn 5000 XP.', xpRequired:5000 },
  ],

};
