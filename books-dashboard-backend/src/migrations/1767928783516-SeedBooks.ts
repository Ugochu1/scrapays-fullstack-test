import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedBooks1767928783516 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO "books"(name, description)
            VALUES 
            ('beloved by toni morrison', 'a haunting and profound novel about slavery’s legacy, centered on sethe, a former enslaved woman haunted by the ghost of her daughter. this pulitzer prize–winning work explores memory, trauma, identity, and the deep bonds of family.'),
            ('the four agreements by don miguel ruiz', 'a short but powerful spiritual/self‑help book that presents four simple principles—agreements you can make with yourself—to reduce suffering and find personal freedom. it blends ancient toltec wisdom with practical guidance for life.'),
            ('the silent patient by alex michaelides', 'a gripping psychological thriller about alicia berenson, a famous painter who inexplicably shoots her husband and then stops speaking. psychotherapist theo faber becomes obsessed with uncovering her motive, leading to shocking twists and revelations.'),
            ('educated by tara westover', 'a powerful memoir about growing up in a strict and isolated family in rural idaho, where formal schooling was limited. tara’s journey from her upbringing to earning a phd illustrates resilience and the transformative power of education.'),
            ('the kite runner by khaled hosseini', 'a moving story of friendship and redemption set against afghanistan’s turbulent history. it follows amir, who must confront his past and seek forgiveness for a childhood betrayal.'),
            ('thinking, fast and slow by daniel kahneman', 'a deep dive into how the human mind works, contrasting intuitive “fast” thinking with more deliberate “slow” thinking. combines psychology and economics to explain decision-making.'),
            ('the hobbit by j.r.r. tolkien', 'a fantasy adventure about bilbo baggins, a humble hobbit who embarks on an epic quest. this prelude to the lord of the rings is filled with courage, magic, and unforgettable characters.'),
            ('the power of habit by charles duhigg', 'a nonfiction book that explores the science of habits—how they form, how they influence our lives, and how we can change them. useful for personal development and behavior change.'),
            ('pride and prejudice by jane austen', 'a beloved romantic novel that centers on elizabeth bennet and her sharp wit, navigating issues of class, marriage, and societal expectations in 19th-century england.'),
            ('the alchemist by paulo coelho', 'a philosophical and inspiring tale about a young shepherd named santiago who travels in search of treasure. the story focuses on following your dreams, listening to your heart, and discovering your personal destiny.'),
            ('sapiens: a brief history of humankind by yuval noah harari', 'a sweeping narrative of our species’ history—from ancient ancestors to modern civilization. it challenges assumptions about culture, economy, religion, and human behavior.'),
            ('1984 by george orwell', 'a dystopian masterpiece that imagines a totalitarian regime where “big brother” watches everyone. the book examines surveillance, truth, freedom, and propaganda—still relevant in today’s world.'),
            ('to kill a mockingbird by harper lee', 'a classic of modern american literature, this novel follows young scout finch in the racially charged south as her father, atticus, defends a black man falsely accused of a crime. it explores justice, morality, and innocence.')

            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "books" WHERE "name" IN 
      (
        'beloved by toni morrison',
        'the four agreements by don miguel ruiz',
        'the silent patient by alex michaelides',
        'educated by tara westover',
        'the kite runner by khaled hosseini',
        'thinking, fast and slow by daniel kahneman',
        'the hobbit by j.r.r. tolkien',
        'the power of habit by charles duhigg',
        'pride and prejudice by jane austen',
        'the alchemist by paulo coelho',
        'sapiens: a brief history of humankind by yuval noah harari',
        '1984 by george orwell',
        'to kill a mockingbird by harper lee'
    )
    `);
  }
}
