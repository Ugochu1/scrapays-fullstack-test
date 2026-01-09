import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedBooks1767928783516 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO "books"(name, description)
            VALUES 
            ('Beloved by Toni Morrison', 'A haunting and profound novel about slavery’s legacy, centered on Sethe, a former enslaved woman haunted by the ghost of her daughter. This Pulitzer Prize–winning work explores memory, trauma, identity, and the deep bonds of family.'),
            ('The Four Agreements by Don Miguel Ruiz', 'A short but powerful spiritual/self‑help book that presents four simple principles—agreements you can make with yourself—to reduce suffering and find personal freedom. It blends ancient Toltec wisdom with practical guidance for life.'),
            ('The Silent Patient by Alex Michaelides', 'A gripping psychological thriller about Alicia Berenson, a famous painter who inexplicably shoots her husband and then stops speaking. Psychotherapist Theo Faber becomes obsessed with uncovering her motive, leading to shocking twists and revelations.'),
            ('Educated by Tara Westover', 'A powerful memoir about growing up in a strict and isolated family in rural Idaho, where formal schooling was limited. Tara’s journey from her upbringing to earning a PhD illustrates resilience and the transformative power of education.'),
            ('The Kite Runner by Khaled Hosseini', 'A moving story of friendship and redemption set against Afghanistan’s turbulent history. It follows Amir, who must confront his past and seek forgiveness for a childhood betrayal.'),
            ('Thinking, Fast and Slow by Daniel Kahneman', 'A deep dive into how the human mind works, contrasting intuitive “fast” thinking with more deliberate “slow” thinking. Combines psychology and economics to explain decision-making.'),
            ('The Hobbit by J.R.R. Tolkien', 'A fantasy adventure about Bilbo Baggins, a humble hobbit who embarks on an epic quest. This prelude to The Lord of the Rings is filled with courage, magic, and unforgettable characters.'),
            ('The Power of Habit by Charles Duhigg', 'A nonfiction book that explores the science of habits—how they form, how they influence our lives, and how we can change them. Useful for personal development and behavior change.'),
            ('Pride and Prejudice by Jane Austen', 'A beloved romantic novel that centers on Elizabeth Bennet and her sharp wit, navigating issues of class, marriage, and societal expectations in 19th-century England.'),
            ('The Alchemist by Paulo Coelho', 'A philosophical and inspiring tale about a young shepherd named Santiago who travels in search of treasure. The story focuses on following your dreams, listening to your heart, and discovering your personal destiny.'),
            ('Sapiens: A Brief History of Humankind by Yuval Noah Harari', 'A sweeping narrative of our species’ history—from ancient ancestors to modern civilization. It challenges assumptions about culture, economy, religion, and human behavior.'),
            ('1984 by George Orwell', 'A dystopian masterpiece that imagines a totalitarian regime where “Big Brother” watches everyone. The book examines surveillance, truth, freedom, and propaganda—still relevant in today’s world.'),
            ('To Kill a Mockingbird by Harper Lee', 'A classic of modern American literature, this novel follows young Scout Finch in the racially charged South as her father, Atticus, defends a Black man falsely accused of a crime. It explores justice, morality, and innocence.')
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "books" WHERE "name" IN 
      (
        'Beloved by Toni Morrison', 
        'The Four Agreements by Don Miguel Ruiz',
        'The Silent Patient by Alex Michaelides',
        'Educated by Tara Westover',
        'The Kite Runner by Khaled Hosseini',
        'Thinking, Fast and Slow by Daniel Kahneman',
        'The Hobbit by J.R.R. Tolkien',
        'The Power of Habit by Charles Duhigg',
        'Pride and Prejudice by Jane Austen',
        'The Alchemist by Paulo Coelho',
        'Sapiens: A Brief History of Humankind by Yuval Noah Harari',
        '1984 by George Orwell',
        'To Kill a Mockingbird by Harper Lee'
    )
    `);
  }
}
