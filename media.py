import random as rd
def run():
    print('''
    ************************************************************
                    WELCOME TO MEDIA CALCULATOR
    This program calculates the media of a random sample from a series of numbers.
    ************************************************************                
    ''')

    print('Please, insert the numbers of the series delimited by coma ( example: 4,5,3,7,1,3,5,7 ): ')
    array_numbers = input()
    array_numbers = array_numbers.split(',')
    array_numbers = [int(x) for x in array_numbers]

    print('Insert the sample: ')
    sample = int(input())
    
    ## Default sample and array
    #array_numbers = (3,4,5,6,7,3,1)
    #sample = 3

    sample = rd.sample(array_numbers, sample)

    sum = count = media =  0
    for s in sample:
        sum += s
        count += 1

    media = sum / count
    
    s_sample = ",".join(str(s) for s in sample)
    
    print(f'''
    

    The sample obtained was : {s_sample}
    Media of the sample is: {str(round(media,2))}
    ''')


if __name__ == '__main__':
    run()