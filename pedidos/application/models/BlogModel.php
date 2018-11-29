<?php  

if(!defined('BASEPATH'))
	exit('No direct script access allowed');

class BlogModel extends CI_Model {
	
	function __construct() {
		parent::__construct();
	}

	function get_blog(){    
        //Inicio da montagem do select 
        $this->db->select('res.id as id, 
        res.title as title, 
        res.keywords as keywords, 
        res.summary as summary,
        res.content as content,
        res.user_id as user_id,
        res.photo as photo,
        user.name as name');
        
        //Seta from
        $this->db->from('ls_post as res');
        //Seta o Join com a tabela de fotos
        $this->db->join('ls_user as user', 'user.id = res.user_id');
        //Executa a query
        $query = $this->db->get();
        //Verifica se retornou alguma informacao
        if ($query->num_rows() > 0)
        {
            $data = $query->result();
            //Retorna o resultado da query
            return $data;
        }
        else
            return array();
    }



}

